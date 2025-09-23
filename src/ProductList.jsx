import React from "react";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ol>
        {products.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>price: {item.price}</p>
          </li>
        ))}

        {/* {[<div>hello</div>, <div>hello 2</div>]} */}
      </ol>
    </div>

    // React.createElement("div", {}, [<div>hello</div>, <div>hello 2</div>])

    /**
     * * Map trong JSX không dùng thêm join vì cú pháp React.createElement với tham số thử 3 là tuỳ chỉnh (có thể la 1 react element, 1 mảng react element hoặc text content)
     */
  );
};

export default ProductList;
