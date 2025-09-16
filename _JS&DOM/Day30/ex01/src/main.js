const products = [
  {
    id: 1,
    name: "Iphone X 64GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    price: 2000,
  },
  {
    id: 2,
    name: "Iphone 11 64GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
    price: 2800,
  },
  {
    id: 3,
    name: "Iphone 16 64GB",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/iphone_17_lavender_1_607c4326aa.png",
    price: 8000,
  },
];

const listProductsEl = document.getElementById("list-products");
const listCartEl = document.getElementById("list-cart");
function renderProducts() {
  let html = "";
  products.forEach((product) => {
    html += `<div>
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}" style="width: 100px"/>
      <p>Price: $${product.price}</p>
      <button data-id="${product.id}" id="btn_add">Add to Cart</button>
    </div>`;
  });
  listProductsEl.innerHTML = html;
}
renderProducts();
let carts = [];
const btnAddEls = document.querySelectorAll("#btn_add");

async function renderCart() {
  const data = await fetch("http://localhost:3000/cart").then((res) =>
    res.json()
  );
  let html = "";
  carts = data;
  data.forEach(
    (item) =>
      (html += `
  <div>
    <h2>${item.name}</h2>
    <p>${item.price}</p>
    <p>${item.quantity}</p>
    <p>${item.quantity * item.price}</p>
    <button onclick="removeItem(${item.id})">Xoá giỏ hàng</button>
  <div>`)
  );
  listCartEl.innerHTML = html;
}
renderCart();

function removeItem(id) {
  fetch(`http://localhost:3000/cart/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      renderCart();
    })
    .catch(() => alert("hehe"));
}

btnAddEls.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const dataId = item.getAttribute("data-id");
    addToCart(dataId);
  });
});

function addToCart(dataId) {
  const foundProduct = products.find((item) => item.id === Number(dataId));
  const existingItem = carts.find((item) => item.id === foundProduct.id);
  if (existingItem) {
    fetch(`http://localhost:3000/cart/${existingItem.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        quantity: existingItem.quantity + 1,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      renderCart();
    });
    return;
  }
  fetch("http://localhost:3000/cart", {
    method: "POST",
    body: JSON.stringify({
      ...foundProduct,
      quantity: 1,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then(() => {
    renderCart();
  });
}
