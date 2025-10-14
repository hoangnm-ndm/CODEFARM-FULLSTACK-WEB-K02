import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  getProductDetail,
  updateProduct,
} from "../../../api/apiProduct";

// * Không sử dụng react-hook-form hay bất cứ thư viện form nào -> xây dựng form add products chỉ với các hook đã học.
const validateFields = (data) => {
  if (!data.title) {
    alert("Tên không được để trống");
    return true;
  }
  if (Number(data.price) > 0) {
    alert("Giá tiền phải là số và phải lớn hơn 0");
    return true;
  }
  return false;
};

const ProductForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
  });
  const nav = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      price: 0,
      description: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateFields(formData)) return;
    try {
      if (!id) {
        await createProduct(formData);
        alert("add product successfully!");
        nav("/admin/products");
      }
      if (id) {
        await updateProduct(id, formData);
        alert("update product successfully");
        nav("/admin/products");
      }
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await getProductDetail(id);
        setFormData(data);
      })();
    }
  }, [id]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{id ? "Cập nhật sản phẩm" : "Tạo mới sản phẩm"}</h1>
        <div className="form-group">
          <label htmlFor="">title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">price</label>
          <input
            type="number"
            value={formData.price}
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">description</label>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
