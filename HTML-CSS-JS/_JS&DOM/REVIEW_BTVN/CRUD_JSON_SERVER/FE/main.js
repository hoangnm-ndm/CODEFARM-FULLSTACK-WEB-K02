const products = document.getElementById("products");
const formProducts = document.getElementById("form-product");
const btnAdd = document.getElementById("btn-add");
const btnCancel = document.getElementById("btn-cancel");

const API_URL = "http://localhost:3000/products";

function renderProducts(data) {
  products.innerHTML = data;
}

let productId = null;

async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const content = data
      .map(
        (item) =>
          `<div>
            <h3>${item.name}</h3>
            <h3>${item.price}</h3>
            <button onclick="updateProduct(${item.id})">Cập nhật</button>
            <button onclick="deleteProduct(${item.id})">Xoá</button>
        </div>`
      )
      .join("");
    renderProducts(content);
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(id) {
  productId = id;
  btnCancel.style.display = "block";
  btnAdd.innerHTML = "Cập nhật";
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
      alert("Không tìm thấy sản phẩm");
      return;
    }
    const data = await res.json();
    formProducts.name.value = data.name;
    formProducts.price.value = data.price;
  } catch (error) {}
}
function cancelUpdate() {
  btnAdd.innerHTML = "Thêm mới";
  btnCancel.style.display = "none";
  productId = null;
  formProducts.reset();
}
btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  cancelUpdate();
});

async function deleteProduct(id) {
  if (!confirm("Xoa khong?")) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      alert("Xoá thất bại");
    }
    fetchProducts();
  } catch (error) {
    console.log(error);
  }
}

async function submitForm(e) {
  e.preventDefault();
  const formdata = new FormData(formProducts);
  const formDataObj = Object.fromEntries(formdata);

  formDataObj.name = formDataObj.name.trim();
  if (!formDataObj.name || formDataObj.name.length < 3) {
    alert("Tên sản phẩm không được để trống và phải trên 3 ký tự");
    return;
  }
  if (
    Number.isNaN(formDataObj.price) ||
    !formDataObj.price ||
    formDataObj.price < 1
  ) {
    alert("Giá tiền phải lớn hơn 1 ");
    return;
  }
  try {
    if (!productId) {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(formDataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        alert("Them san pham that bai");
      }
    }
    if (productId) {
      const res = await fetch(`${API_URL}/${productId}`, {
        method: "PUT",
        body: JSON.stringify(formDataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        alert("Them san pham that bai");
      }
      cancelUpdate();
    }
    formProducts.reset();
    fetchProducts();
  } catch (error) {}
}

formProducts.addEventListener("submit", submitForm);

fetchProducts();
