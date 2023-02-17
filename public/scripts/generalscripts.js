// Shoppingcart toggle
const shoppingIcon = document.querySelector("#cartIcon");
const shoppingCart = document.querySelector("#shoppingcart");
shoppingIcon.addEventListener('click', () => {
    let computedStyle = window.getComputedStyle(shoppingCart,null); // This fixed event not being triggered on first click
    let cart_visibility = computedStyle.getPropertyValue("visibility"); // --||--
    if (cart_visibility== "hidden") {
        shoppingCart.style.visibility = "visible"
    }
    else {
        shoppingCart.style.visibility = "hidden"
    }
})


