import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState({
    _page: 1,
    _limit: 10,
  });
  // api: https://api-class-o1lo.onrender.com/api/example/products
  // hiển thị danh sách sản phẩm từ api
  // Có phân trang, tìm kiếm bộ lọc khoảng giá, sắp xếp theo giá tiền
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Làm sạch lại query params không cho phép có các key undefined
        const cleanUpParams = Object.entries(query)
          .filter((item) => Boolean(item))
          .map(([item, value]) => `${item}=${value}`)
          .join("&");
        // Gọi tới API
        const response = await fetch(
          `https://api-class-o1lo.onrender.com/api/example/products?${cleanUpParams}`
        ).then((res) => res.json());
        setProducts(response.data);
        setMeta(response.meta);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
    // Phụ thuộc của useEffect là state query
  }, [query]);

  const handlePagination = (page) => {
    // thay đổi lại state query, giải lại các query cũ và cập nhật lại key page = với page mình truyền đi
    setQuery((prev) => ({ ...prev, page: page }));
  };
  console.log(query);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            console.log(e);
            if (e.key === "Enter") {
              setQuery((prev) => ({ ...prev, q: searchValue }));
            }
          }}
        />
        <button
          onClick={() => {
            setQuery((prev) => ({ ...prev, q: searchValue }));
          }}
        >
          Tim kiem
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
              }}
            >
              <img style={{ width: 150 }} src={item.thumbnail} alt="" />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <div>Khong co san pham</div>
        )}
      </div>
      {meta && (
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <button
            onClick={() => {
              if (meta.page === 1) return;
              handlePagination(meta.page - 1);
            }}
          >
            prev
          </button>
          {Array.from({ length: meta.totalPages }).map((_, index) => (
            <button
              style={{ background: meta.page === index + 1 ? "pink" : "" }}
              onClick={() => handlePagination(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => {
              if (meta.page === meta.totalPages) return;
              handlePagination(meta.page + 1);
            }}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
};

// state -> component re-render -> goi callback trong useEffect (callback co dependencies)

export default App;
