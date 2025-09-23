// * http://localhost:3000/products
// * http://localhost:3000/products/repos?sort=createdAt

/**
 ** Dùng 2 API đã cho phía trên để clone lại trang cá nhân github của một người bất kỳ
 ** Xây dựng tính năng tìm kiếm user github dựa trên username của người dùng.
 */

function render(user) {
  return `
        <div><img src="${user.avatar_url}"/>
        <h2>${user.name || user.login}</h2></div>
    `;
}

async function fetchUser() {
  const { data } = await axios.get("http://192.168.1.28:3000/git/tucd2005");
  console.log(data);
  document.body.innerHTML = render(data);
}

fetchUser();
