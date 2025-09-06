const url = "http://localhost:3000/products";

const productsElement = document.getElementById("products");

const titleEle = document.getElementById("title");
const priceEle = document.getElementById("price");
const formProduct = document.getElementById("product-form");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let content = "";
    data.forEach((item) => {
      content += /*html*/ `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>
            <button class="btn-danger">Delete</button>
            <button class="btn-warn">Update</button>
          </td>
        </tr>
        `;
    });
    productsElement.innerHTML = content;
  })
  .catch((err) => {
    console.log(err);
  });

formProduct.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleEle.value;
  const price = priceEle.value;

  console.log({ title, price });

  // * Gửi dữ liệu lên JSON-Server
});
