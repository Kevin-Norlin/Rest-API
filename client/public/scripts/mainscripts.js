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

const darkModeButton = document.querySelector('#cb2-7');
darkModeButton.addEventListener('click',toggleDarkMode)

function toggleDarkMode() {
  const cssLink = document.querySelector('#cssLink');
  if (cssLink.getAttribute('href') === '../../css/style.css') {
    cssLink.setAttribute('href','../../css/style-dark.css');
  }
  else {
    cssLink.setAttribute('href','../../css/style.css')

  }
}

  
updateCart();  