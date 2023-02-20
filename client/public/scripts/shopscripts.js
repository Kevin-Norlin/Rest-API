const addToCart = document.getElementById("addToCartIcon");
const imagePath = "../images/items/"

// Listener events

const addToCartButtons = document.querySelectorAll("#addToCartIcon");
addToCartButtons.forEach(button => {
  button.addEventListener('click', addProductToCart);
});




async function addItemToDb(val) {
  console.log(val)
  const response = await fetch("http://localhost:3000/add_product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(val)
  });


  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  else {
    const jsonResponse = await response.json();
    throw new Error(jsonResponse.Error)
  }

}


async function addProductToCart(event) {
  const productElem = event.target.parentNode;

  const idToAdd = parseInt(productElem.getAttribute('id'));

  const children = productElem.children;
  let nameToAdd, descriptionToAdd, priceToAdd, stockToAdd, urlToAdd;


  for (let i = 0; i < children.length; i++) {
    let className = children[i].className;
    switch (className) {
      case "product-name":
        nameToAdd = children[i].textContent; break;
      case "product-desc":
        descriptionToAdd = children[i].textContent; break;
      case "product-price":
        priceToAdd = parseInt(children[i].textContent); break;
      case "product-stock":
        stockToAdd = parseInt(children[i].getAttribute('id')); break;
      case "image-url":
        urlToAdd = children[i].getAttribute('id'); break;

    }
  }
  const product = {
    id: idToAdd,
    name: nameToAdd,
    description: descriptionToAdd,
    price: priceToAdd,
    stock: stockToAdd,
    image_url: urlToAdd
  }
  console.log(product)
  const response = await fetch("http://localhost:3000/shop/add_product_to_cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ product })
  });
  updateCart();

}




async function updateCart() {

  const shoppingCart = document.querySelector("#shoppingcart-items");
  const sessionData = await fetch('http://localhost:3000/session-data')
    .then(response => response.json())
    .catch(error => console.error(error));

  const sessionCart = sessionData.cart;

  if (sessionCart) {
    let cartHtml = "";

    for (let i = 0; i < sessionCart.length; i++) {
      console.log("here")
      let cartItem = sessionCart[i];
      console.log(cartItem)
      cartHtml += `<img src="${cartItem.product.image_url}" id="${cartItem.product.image_url}">
      <h3 class="product-name" id="${cartItem.product.name}"> ${cartItem.product.name} </h3> 
      <h3 class="product-price" id="${cartItem.product.price}"> ${cartItem.product.price} </h3>
      <h3 class="product-quantity" id="${cartItem.quantity}"> ${cartItem.quantity} </h3>`
    }
    shoppingCart.innerHTML = cartHtml;

  }
}

updateCart();
