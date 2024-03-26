// const getallproducts = () =>{
//     fetch("http://localhost:8080/data/post")
//     .then((res) => {return res.json() })
//     .then((data) => {return data})
//     .catch((error) => { .error(error)})
// }

const getallproducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/data/post");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

const displaycontent = async () => {
  const getproducts = await getallproducts();
  const productcontainer = document.querySelector(".productslist");
  productcontainer.innerHTML = "";
  getproducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("col-md-3");
    card.onclick = () => {
      window.location.href = `productDetail.html?id=${product.rowno}`;
    };
    card.innerHTML = `
    <div class="card p-2">
        <p class="productName">${product.product_name}</p>
        <img src="${product.image_link}" alt="Product Image" class="productImg img">
        <div class="row">
          <div class="col-md-6">
            <p class="productPrice h6">Rs${product.price}</p>
            <p class="productRating text-success h6">Rating: ${product.rating}</p>
          </div>
          <div class="col-md-6 h-100 mt-2 product-btn">
        </div>
      </div>
    </div>
    `;
    productcontainer.appendChild(card);
  });
};
displaycontent();
