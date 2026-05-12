// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}


// =========================
// PRODUCTS
// =========================

const products = [

  {
    id:1,
    name:"Naruto Poster",
    price:49,
    category:"poster",
    image:"Image./Naruto Poster.jpg"
  },

  {
    id:2,
    name:"Boa Wanted Poster",
    price:49,
    category:"poster",
    image:"Image/Boa Poster.jpg"
  },

  {
    id:3,
    name:"Demon Slayer Poster",
    price:49,
    category:"poster",
    image:"Image/Demon Slayer Poster.jpg"
  },

  {
    id:4,
    name:"Luffy Wanted Poster",
    price:49,
    category:"poster",
    image:"Image/Luffy.jpg"
  },

  {
    id:5,
    name:"one Piece Poster",
    price:49,
    category:"poster",
    image:"Image/One Piece Poster.jpg"
  },

  {
    id:6,
    name:"Pikachu Figure",
    price:199,
    category:"figure",
    image:"Image/Pikachu figure.jpeg"
  },

   {
    id:7,
    name:"Sakuna Figure",
    price:799,
    category:"figure",
    image:"Image/Sakuna Figure.jpg"
  },

   {
    id:8,
    name:"Obito Figure",
    price:799,
    category:"figure",
    image:"Image/Obito Figure.jpg"
  },

   {
    id:9,
    name:"Denji Figure",
    price:799,
    category:"figure",
    image:"Image/Denji Figure.jpg"
  },

  {
    id:10,
    name:"Watakoi Manga",
    price:599,
    category:"manga",
    image:"Image/Watakoi.jpg"
  },

  {
    id:11,
    name:"Image/Love is war Manga",
    price:599,
    category:"manga",
    image:"Image/Love is war.jpg"
  },

  {
    id:12,
    name:"White Katana",
    price:1499,
    category:"Katana",
    image:"Image/White Katana.jpg"
  },

   {
    id:13,
    name:"Red Katana",
    price:1499,
    category:"Katana",
    image:"Image/Red Katana.jpg"
  },

  {
    id:14,
    name:"Keychain",
    price:49,
    category:"Keychain",
    image:"Image/Keychain 01.png"
  },

   {
    id:15,
    name:"Keychain",
    price:49,
    category:"Keychain",
    image:"Image/keychain 02.png"
  },

  {
    id:16,
    name:"Anya Sticker",
    price:10,
    category:"Sticker",
    image:"Image/Anya Sticker.png"
  },

   {
    id:17,
    name:"Gojo Sticker",
    price:10,
    category:"Sticker",
    image:"Image/Gojo Sticker.png"
  },

   {
    id:16,
    name:"Demon Slayer Sticker",
    price:10,
    category:"Sticker",
    image:"Image/Demon Slayer Sticker.png"
  },

];


// =========================
// ELEMENTS
// =========================

const productsGrid =
document.getElementById("productsGrid");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const sortFilter =
document.getElementById("sortFilter");

const cartDrawer =
document.getElementById("cartDrawer");

const openCart =
document.getElementById("openCart");

const closeCart =
document.getElementById("closeCart");

const cartItems =
document.getElementById("cartItems");

const cartTotal =
document.getElementById("cartTotal");

const cartCount =
document.getElementById("cart-count");

const checkoutBtn =
document.querySelector(".checkout-btn");


// =========================
// LOCAL STORAGE CART
// =========================

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];


// =========================
// DISPLAY PRODUCTS
// =========================

function displayProducts(items){

  productsGrid.innerHTML = "";

  items.forEach(product => {

    productsGrid.innerHTML += `

      <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

          <h3>${product.name}</h3>

          <p class="price">₹${product.price}</p>

          <button
            class="cart-btn"
            onclick="addToCart(${product.id})"
          >
            Add To Cart
          </button>

        </div>

      </div>

    `;

  });

}


// =========================
// FILTER PRODUCTS
// =========================

function filterProducts(){

  let filtered = [...products];

  const searchValue =
  searchInput.value.toLowerCase();

  filtered = filtered.filter(product =>

    product.name
    .toLowerCase()
    .includes(searchValue)

  );

  const categoryValue =
  categoryFilter.value;

  if(categoryValue !== "all"){

    filtered = filtered.filter(product =>

      product.category === categoryValue

    );

  }

  const sortValue =
  sortFilter.value;

  if(sortValue === "low-high"){

    filtered.sort((a,b)=>

      a.price - b.price

    );

  }

  else if(sortValue === "high-low"){

    filtered.sort((a,b)=>

      b.price - a.price

    );

  }

  displayProducts(filtered);

}


// =========================
// FILTER EVENTS
// =========================

searchInput.addEventListener(
"input",
filterProducts
);

categoryFilter.addEventListener(
"change",
filterProducts
);

sortFilter.addEventListener(
"change",
filterProducts
);


// =========================
// ADD TO CART
// =========================

function addToCart(id){

  const selectedProduct =

  products.find(product =>

    product.id === id

  );

  cart.push(selectedProduct);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  updateCart();

}


// =========================
// UPDATE CART
// =========================

function updateCart(){

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartItems.innerHTML += `

      <div class="cart-item">

        <img src="${item.image}">

        <div class="cart-details">

          <h4>${item.name}</h4>

          <p>₹${item.price}</p>

        </div>

        <button
          class="remove-btn"
          onclick="removeCartItem(${index})"
        >
          ✕
        </button>

      </div>

    `;

  });

  cartTotal.innerText = total;

  cartCount.innerText = cart.length;

}


// =========================
// REMOVE ITEM
// =========================

function removeCartItem(index){

  cart.splice(index,1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  updateCart();

}


// =========================
// OPEN CART
// =========================

openCart.addEventListener("click",()=>{

  cartDrawer.classList.add("active");

});


// =========================
// CLOSE CART
// =========================

closeCart.addEventListener("click",()=>{

  cartDrawer.classList.remove("active");

});


// =========================
// WHATSAPP CHECKOUT
// =========================

checkoutBtn.addEventListener("click",()=>{

  if(cart.length === 0){

    alert("Your cart is empty!");

    return;

  }

  let message =
  "🛒 SAISHO KARA STORE ORDER %0A%0A";

  cart.forEach((item,index)=>{

    message +=

    `${index + 1}. ${item.name} - ₹${item.price}%0A`;

  });

  let total = cart.reduce(

    (sum,item)=> sum + item.price,

    0

  );

  message += `%0A💰 Total: ₹${total}`;

  
  // CHANGE TO YOUR NUMBER

  const phone = "9362732537";


  const whatsappURL =

  `https://wa.me/${phone}?text=${message}`;


  window.open(
    whatsappURL,
    "_blank"
  );

});


// =========================
// INITIAL LOAD
// =========================

displayProducts(products);

updateCart();
