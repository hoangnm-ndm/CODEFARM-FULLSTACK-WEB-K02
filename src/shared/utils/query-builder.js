import createError from "./createError.js";

export const queryBuilder = async (Model, queryParams, options = {}) => {
  const {
    page = 1,
    limit = 12,
    sort = "createdAt",
    order = "desc",
    search,
    searchFields = [],
    includeDeleted = false,
    ...filters
  } = queryParams;
  console.log(filters);

  const { populate = [] } = options;

  // Xây dựng điều kiện truy vấn
  const queryConditions = {};

  // Xử lý soft delete
  if (!includeDeleted) {
    queryConditions.deletedAt = null;
  }

  // Áp dụng bộ lọc từ query parameters
  Object.keys(filters).forEach((key) => {
    applyFilter(key, filters[key], queryConditions);
  });
  console.log(queryConditions);
  // Áp dụng tìm kiếm nếu có
  if (search && searchFields.length > 0) {
    // Trong mongoose mình không thể tìm kiếm _id dựa trên string thông thường vì _id của mongo là ObjectId
    const searchRegex = new RegExp(search, "i");
    queryConditions.$or = searchFields.map((field) => {
      if (field === "_id") {
        // Xử lý đưa id của mongo từ ObjectId thành string
        return {
          // $expr (aggregation expression) là một cách đặc biệt cho phép dùng biểu thức kiểu pipeline bên trong $match và $or
          $expr: {
            // regex match là biểu thức dùng bên trong stage($expr)
            $regexMatch: {
              // input là giá trị nhận vào trong biểu thức regexMatch, $toString là biểu dùng bên trong stage($expr)
              input: { $toString: "$_id" },
              // Đưa giá trị tìm kiếm vào
              regex: search,
              // option regex
              options: "i",
            },
          },
        };
      }
      return {
        [field]: searchRegex,
      };
    });
  }

  // Tạo truy vấn Mongoose với các điều kiện
  let query = Model.find(queryConditions);

  // Áp dụng population nếu có
  if (populate.length > 0) {
    populate.forEach((pop) => {
      query = query.populate({
        path: pop.path,
        select: pop.select || "", // Mặc định lấy trường name nếu không chỉ định select
      });
    });
  }

  // await Class.find({}).populate({path: "teacherId", select: "username fullname, email"}).populate({path: "majorId", select: "name code"}).populate({})

  // Áp dụng sắp xếp
  const sortOrder = order === "desc" ? -1 : 1;
  query = query.sort({ [sort]: sortOrder });

  // Áp dụng phân trang
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;
  query = query.skip(skip).limit(limitNum);

  // Thực thi truy vấn
  const total = await Model.countDocuments(queryConditions);
  const data = await query.exec();

  return {
    data,
    meta: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    },
  };
};

/*
price: {
  $gte: 8000,
}
*/

function applyFilter(key, value, conditional) {
  if (value === null || value === "") return;

  const matchRange = key.match(/(From|To|Min|Max)$/);

  if (matchRange) {
    const field = key.replace(/From$|To$|Min$|Max$/, "");
    const operatorMap = { From: "$gte", To: "$lte", Min: "$gte", Max: "$lte" };
    const operator = operatorMap[matchRange[1]];
    conditional[field] = {
      ...conditional[field],
      [operator]:
        matchRange[1] === "From" || matchRange[1] === "To"
          ? new Date(value)
          : Number(value),
    };
    return;
  }

  if (value === "true" || value === "false") {
    conditional[key] = value === "true";
    return;
  }

  if (value === "__nullOrEmpty__") {
    conditional.$or = [
      { [key]: null },
      { [key]: { $exists: false } },
      { [key]: "" },
    ];
    return;
  }

  if (!isNaN(value)) {
    conditional[key] = value;
    return;
  }

  const matchAt = key.match(/(At)/);
  if (matchAt) {
    conditional[key] = new Date(value);
    return;
  }

  conditional[key] = value;
}
