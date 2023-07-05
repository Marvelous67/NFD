let letters = document.getElementsByClassName("letter");

for (let i = 0; i < letters.length; i++) {
  letters[i].style.animationDelay = i * 0.1 + "s";
}

let bar = document.getElementsByClassName(".page2");

function notification() {
  document.getElementById("love").style.display = "none";
}

function shop() {
  document.getElementById("page2").style.display = "none";
}

function Shirts() {
  document.getElementById("shop2").style.display = "flex";
  document.getElementById("shop3").style.display = "none";
  document.getElementById("shop4").style.display = "none";
  document.getElementById("shop1").style.display = "none";
  document.getElementById("shirt").style.backgroundColor = "rgb(135, 2, 6)";
  document.getElementById("Sweaters").style.backgroundColor = "white";
  document.getElementById("caps").style.backgroundColor = "white";
  document.getElementById("hood").style.backgroundColor = "white";
  document.getElementById("shirt").style.color = "white";
  document.getElementById("caps").style.color = "black";
  document.getElementById("Sweaters").style.color = "black";
  document.getElementById("hood").style.color = "black";
}
function Caps() {
  document.getElementById("shop1").style.display = "flex";
  document.getElementById("shop2").style.display = "none";
  document.getElementById("shop3").style.display = "none";
  document.getElementById("shop4").style.display = "none";
  document.getElementById("shirt").style.backgroundColor = "white";
  document.getElementById("Sweaters").style.backgroundColor = "white";
  document.getElementById("caps").style.backgroundColor = "rgb(135, 2, 6)";
  document.getElementById("hood").style.backgroundColor = "white";
  document.getElementById("shirt").style.color = "black";
  document.getElementById("caps").style.color = "white";
  document.getElementById("hood").style.color = "black";
  document.getElementById("Sweaters").style.color = "black";
}

function Hoods() {
  document.getElementById("shop1").style.display = "none";
  document.getElementById("shop2").style.display = "none";
  document.getElementById("shop3").style.display = "flex";
  document.getElementById("shop4").style.display = "none";
  document.getElementById("shirt").style.backgroundColor = "white";
  document.getElementById("caps").style.backgroundColor = "white";
  document.getElementById("Sweaters").style.backgroundColor = "white";
  document.getElementById("hood").style.backgroundColor = "rgb(135, 2, 6)";
  document.getElementById("shirt").style.color = "black";
  document.getElementById("caps").style.color = "black";
  document.getElementById("hood").style.color = "white";
  document.getElementById("Sweaters").style.color = "black";
}
function Sweaters() {
  document.getElementById("shop1").style.display = "none";
  document.getElementById("shop2").style.display = "none";
  document.getElementById("shop3").style.display = "none";
  document.getElementById("shop4").style.display = "flex";
  document.getElementById("shirt").style.backgroundColor = "white";
  document.getElementById("caps").style.backgroundColor = "white";
  document.getElementById("hood").style.backgroundColor = "white";
  document.getElementById("Sweaters").style.backgroundColor = "rgb(135, 2, 6)";
  document.getElementById("shirt").style.color = "black";
  document.getElementById("caps").style.color = "black";
  document.getElementById("hood").style.color = "black";
  document.getElementById("Sweaters").style.color = "white";
}
// Get the menu button, close button, and menu elements
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const menu = document.getElementById("menu");

// Function to toggle the menu
function toggleMenu() {
  menu.classList.toggle("show");
}

// Add click event listeners to the menu button and close button
menuButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Render cart items and total price
renderCartItems();
updateTotalPrice();

// Function to add a product to the cart
function add(productName, productImage, productPrice) {
  // Check if the product is already in the cart
  alert("Added To Cart Succesfully");
  const existingCartItem = cartItems.find((item) => item.name === productName);
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    // Create new cart item
    const newCartItem = {
      name: productName,
      image: productImage,
      price: productPrice,
      quantity: 1,
    };
    cartItems.push(newCartItem);
  }

  // Save cart items to local storage
  saveCartItemsToLocalStorage();

  // Render cart items and update total price
  renderCartItems();
  updateTotalPrice();
}

// Function to increase the quantity of a cart item
function increaseQuantity(index) {
  cartItems[index].quantity++;

  // Save cart items to local storage
  saveCartItemsToLocalStorage();

  // Render cart items and update total price
  renderCartItems();
  updateTotalPrice();
}
function decreaseQuantity(index) {
  cartItems[index].quantity--;

  // Save cart items to local storage
  saveCartItemsToLocalStorage();

  // Render cart items and update total price
  renderCartItems();
  updateTotalPrice();
}

// Function to delete a cart item
function deleteCartItem(index) {
  cartItems.splice(index, 1);

  // Save cart items to local storage
  saveCartItemsToLocalStorage();

  // Render cart items and update total price
  renderCartItems();
  updateTotalPrice();
}

// Function to render the cart items
function renderCartItems() {
  cartItemsElement.innerHTML = "";

  cartItems.forEach((cartItem, index) => {
    // Create new cart item element
    const cartItemElement = document.createElement("div");
    cartItemElement.dataset.index = index;

    // Product image
    const imageElement = document.createElement("img");
    imageElement.src = cartItem.image;
    imageElement.alt = cartItem.name;
    cartItemElement.appendChild(imageElement);

    // Product name
    const nameElement = document.createElement("span");
    nameElement.textContent = cartItem.name;
    cartItemElement.appendChild(nameElement);
    // Product name
    const priceElement = document.createElement("h1");
    priceElement.textContent = cartItem.price;
    cartItemElement.appendChild(priceElement);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Del";
    deleteButton.onclick = () => deleteCartItem(index);
    cartItemElement.appendChild(deleteButton);

    const decreaseButton = document.createElement("section");
    decreaseButton.textContent = "-";
    decreaseButton.onclick = () => decreaseQuantity(index);
    cartItemElement.appendChild(decreaseButton);
    cartItem.price * 2;

    // Quantity
    const quantityElement = document.createElement("p");
    quantityElement.classList.add("quantity");
    quantityElement.textContent = cartItem.quantity;
    cartItemElement.appendChild(quantityElement);

    // Increase quantity button
    const increaseButton = document.createElement("section");
    let olon = document.createElement("p");
    increaseButton.textContent = "+";
    increaseButton.onclick = () => increaseQuantity(index);
    cartItemElement.appendChild(increaseButton);

    // Append cart item to cart items element
    cartItemsElement.appendChild(cartItemElement);
  });
}

// Function to update the total price
function updateTotalPrice() {
  let totalPrice = 0;

  cartItems.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
  });

  totalPriceElement.textContent = `Total Price: ₦${totalPrice.toFixed(2)}`;
}

// Function to save cart items to local storage
function saveCartItemsToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

let image = document.getElementById("xow");
let input6 = document.getElementById("polish");

input6.addEventListener("change", () => {
  image.src = URL.createObjectURL(input6.files[0]);
});

window.addEventListener("load", function () {
    const sad = localStorage.getItem('Bombs')
    if (sad) {
      sad = JSON.parse(sad)
       document.documentElement.style.setProperty("--main-color", sad.color1)
    }
});

function Dark() {
  document.documentElement.style.setProperty("--main-color", "rgb(37, 39, 41)");
  document.documentElement.style.setProperty("--text-color", "White");
  document.documentElement.style.setProperty("--main3-color", "white");

  let blud = {
    color1: "rgb(37, 39, 41)",
    color2: "white",
    color3: "white",
  };

  localStorage.setItem("Bombs", JSON.stringify(blud));


}
