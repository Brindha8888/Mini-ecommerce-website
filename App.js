// Hardcoded list of products
const products = [
  { id: 1, name: "T-shirt", description: "Comfortable cotton t-shirt.", price: 20, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Shoes", description: "Stylish running shoes.", price: 50, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Hat", description: "Cool summer hat.", price: 15, image: "https://via.placeholder.com/100" },
  { id: 4, name: "Bag", description: "Spacious travel bag.", price: 35, image: "https://via.placeholder.com/100" },
  { id: 5, name: "Watch", description: "Stylish wristwatch.", price: 100, image: "https://via.placeholder.com/100" }
];

// Display products
const productList = document.getElementById("product-list");
if (productList) {
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });
}

// Add to cart
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// Load cart
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(productId => {
      const product = products.find(p => p.id === productId);
      if (product) {
        cartItems.innerHTML += `<p>${product.name} - $${product.price}</p>`;
      }
    });
  }
}

// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  alert("Cart cleared!");
  location.reload();
}
