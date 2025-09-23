import React from "react";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Header from "./Header";

// * props = properties
/**
 *
 * * Mỗi một component chỉ có 1 props duy nhất là object gom toàn bộ các properties lại.
 * * Nếu có nhiều thuộc tính - có thể dùng cú pháp destructuring.
 * * props là cách để truyền dữ liệu từ component cha sang component con.
 */

const ComponentA = ({ name, email }) => {
  console.log(name, email);
  return <></>;
};

const App = () => {
  const products = [
    { id: 1, name: "iphone 17", price: 2000 },
    { id: 2, name: "ipad 10", price: 200 },
  ];

  return (
    <>
      <Header />
      <ProductList products={products} />
      <Footer />
    </>
  );
};

export default App;

/**
 * * Component
 * * - Đặt tên theo PascalCase
 * * - Sử dụng props thay cho cách truyền parameter thông thường.
 * * - Component trả về JSX
 * * - Component là một thành phần tham gia xây dựng giao diện cho ứng dụng, được tạo ra để tuỳ chỉnh, tái sử dụng và cập nhật khi cần thiết.
 * * - React không re-render (cập nhật lại giao diện) khi state thay đổi (vì react không quản lý function) - react chỉ re-render component khi có sự thay đổi -> Vì vậy, luôn dùng cú pháp component để xây dựng giao diện.
 */
