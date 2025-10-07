import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch(
      `https://api-class-o1lo.onrender.com/api/example/products?${
        searchValue && `q=${searchValue}`
      }&_limit=10&_page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setMetaData(data.meta);
      });
  }, [searchValue, currentPage]);

  // Phân trang dữ liệu và chọn được limit xây dựng tìm kiếm
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Tim kiem..."
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setSearchValue(e.target.value);
            }
          }}
        />
      </div>
      <h1>Learning useEffect</h1>
      <div id="productList">
        {products.length > 0
          ? products.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <button>Mua ngay</button>
              </div>
            ))
          : "dang tai du lieu..."}
      </div>
      {metaData && (
        <div
          style={{
            marginTop: 15,
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <button
            onClick={() => {
              if (currentPage === 1) return;
              handleNavigate(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            prev
          </button>
          {Array.from({ length: metaData.totalPages }).map((_, index) => (
            <button
              onClick={() => handleNavigate(index + 1)}
              style={{
                background: `${index + 1 === currentPage ? "pink" : ""}`,
              }}
              key={index}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => {
              if (currentPage === metaData.totalPages) return;
              handleNavigate(currentPage + 1);
            }}
            disabled={currentPage === metaData.totalPages}
          >
            next
          </button>
        </div>
      )}
    </>
  );
};

export default App;
