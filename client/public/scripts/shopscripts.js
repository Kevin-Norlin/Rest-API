const addToCart = document.getElementById("addToCartIcon");
const imagePath = "../images/items/"

const itemArray = [
    { 
      name: 'Seiko 5',
      description: 'Stainless Steel Black Arabic Dial Automatic SNKP21 SNKP21J1 SNKP21J Mens Watch',
      image_url: `${imagePath}seiko-SNKP2J1J.jpg`,
      price: 30000,
      current_stock: 1
    },
    { 
      name: 'Prospex U.S. Special Edition',
      description: 'Celebrates Seiko Prospexs ongoing efforts to promote ocean exploration and conservation. Automatic diver with manual winding capability',
      image_url: `${imagePath}SRPH57_1.webp`,
      price: 15000,
      current_stock: 3
    },
    {
        name: 'Seiko prospex 200m diver',
        description: "Automatic with manual winding capacity",
        image_url: `${imagePath}neel2_sbdc029_10_1600x.webp`,
        price: 10000,
        current_stock: 12

    },
    {
        name: "Rolex Submariner Date Watch",
        description: "It features a unidirectional rotatable bezel and solid-link Oyster bracelet. The latest generation Submariner and Submariner Date remain faithful to the original model launched in 1953",
        image_url: `${imagePath}m126610ln-0001.webp`,
        price: 110000,
        current_stock: 18
    },
    {
    name: "Rolex Submariner Hulk",
    description: "Self-winding Automatic Movement COSC Superlative Chronometer Certified",
    image_url: `${imagePath}WatchGuyNYC_RN128_Rolex_Hulk_Submariner_Date_40_Green_Dial_Mens_Watch_116610LV_1_1024x1024.webp`,
    price: 150000 ,
    current_stock: 4 
    }
    // Add more items here
  ];


async function addItem(val) {
    console.log(val)
    const response = await fetch("http://localhost:3000/add_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body : JSON.stringify(val)
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
  
/*
  for (i = 0; i < itemArray.length; i++) {
    addItem(itemArray[i]);
  }
*/
async function addProductToCart() {
  const productElem = addToCartButton.parentNode;
  const idToAdd = productElem.getAttribute('id');
  const children = productElem.children;
  for (let i = 0; i < children.length; i++) {
    let className = children[i].classList;
    switch (className) {
      case "product-name":
        const nameToAdd = children[i].getAttribute("id"); break;
      case "product-desc":
        const descriptionToAdd = children[i].getAttribute("id"); break;
      case "product-price":
        const priceToAdd = children[i].getAttribute("id"); break;
      case "product-stock":
        const stockToAdd = children[i].getAttribute("id"); break;
    } 
  }
  const product = {
    id: idToAdd,
    name: nameToAdd,
    description: descriptionToAdd,
    price: priceToAdd,
    stock:stockToAdd
  }
  const response = await fetch("http://localhost:3000/shop/add_product_to_cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({product})
  });
  updateCart();

}

const addToCartButton = document.querySelectorAll("#addToCartIcon");
addToCartButton.addEventListener('click',addProductToCart());
  
async function updateCart() {
  const shoppingCart = document.querySelectorAll("#shoppingcart-items");
  const sessionData = await fetch("http://localhost:3000/session-data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const sessionCart = sessionData.cart;
  if (sessionData.cart) {
    for (let i = 0; i < sessionData.cart.length; i++) {
      shoppingCart.innerHTML = `<img src="${sessionCart.product.image_url} id="${sessionCart.product.image_url}">
      <h3 class="product-name" id="${sessionCart.product.name}"> ${sessionCart.product.name} </h3> 
      <h3 class="product-price" id="${sessionCart.product.price}"> ${sessionCart.product.price} </h3>
      <h3 class="product-quantity" id="${sessionCart.quantity}"> ${sessionCart.quantity} </h3>`
    }
  }
  

}