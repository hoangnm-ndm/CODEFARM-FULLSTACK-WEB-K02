import { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../../../api/apiProduct";
import { Link } from "react-router-dom";

const ManagementProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
    // IIFE = Immediately Invoked Function Expression
  }, []);
  const handleRemove = async (id) => {
    if (!confirm("are you sure??")) return;
    await removeProduct(id);
    alert("Xoa thanh cong!");
    fetchProduct();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>
              <Link to="/admin/products/add">Add new</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleRemove(item._id)}>Delete</button>{" "}
                <Link to={`/admin/products/update/${item._id}`}>Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagementProductPage;
