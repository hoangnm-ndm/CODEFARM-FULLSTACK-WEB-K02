fetch("http://localhost:3000/products", {})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let content = "";
    data.forEach((item) => {
      content += /*html*/ `
            <div>
                <h2>${item.title}</h2>
                <p>Price: $ ${item.price}</p>
                <button>Mua ngay</button>
            </div>
        `;
    });
    document.body.innerHTML = content;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("end game!");
  });

/**
 * fetch function
 *
 * Input: Request (url, method, body, query, params, headers)
 * Output: Response Promise (data, status, message, status Text)
 */

/**
 * Promise là một đối tượng đặc biệt có sẵn trong JS
 * - phương thức `then`
 * - phương thức `catch`
 */
