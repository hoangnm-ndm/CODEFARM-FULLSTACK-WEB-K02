async function fetchProducts() {
  try {
    // * thử thực hiện
    const response = await fetch("http://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // * lỗi bắt được trong quá trình thực hiện
    console.log(error);
  }
}

fetchProducts();

async function fetchProducts1() {
  try {
    // * thử thực hiện
    const { data } = await axios.get("http://dummyjson.com/products");
    console.log(data);
    return data;
  } catch (error) {
    // * lỗi bắt được trong quá trình thực hiện
    console.log(error);
  }
}

fetchProducts1();
