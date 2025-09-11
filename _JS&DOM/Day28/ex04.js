const listProducts = document.getElementById("listProducts");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");
let sort = null;
let filter = null;
function render(data) {
  return `
    <div>
        ${data
          .map(
            (item) =>
              `<div>
            <h3>${item.name}</h3>
            <p>${item.type}</p>
            <p>$ ${item.price}</p>
          </div>`
          )
          .join("")}
    </div>
    `;
}

function fetchProducts() {
  let params = {
    type: filter,
    _sort: "name",
    _order: sort,
  };
  params = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value)
  );
  axios
    .get(`http://192.168.1.28:3000/products`, { params })
    .then(({ data }) => (listProducts.innerHTML = render(data)));
}

fetchProducts();

filterSelect.addEventListener("change", (e) => {
  filter = e.target.value;
  fetchProducts();
});

sortSelect.addEventListener("change", (e) => {
  sort = e.target.value;
  fetchProducts();
});
