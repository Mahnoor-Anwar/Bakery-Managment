//sroll
var marginY = 0;
var destination = 0;
var speed = 30;
var scroller = null;

function ScrollFun(element) {
  destination = document.getElementById(element).offsetTop;

  scroller = setTimeout(function () {
    ScrollFun(element);
  }, 7);

  marginY = marginY + speed;

  if (marginY >= destination) {
    clearTimeout(scroller);
  }
  window.scroll(0, marginY);
}

//item-numbers

const button = document.querySelectorAll(".btn");

let product = [
  {
    name: "you can shop your favourite item",
    price: 0,
    tag: "shop",
    Incart: 0,
  },
  {
    name: "chocolate cupcake",
    price: 90,
    tag: "cc",
    Incart: 0,
  },

  {
    name: "Vanila cupcake",
    price: 90,
    tag: "vc",
    Incart: 0,
  },

  {
    name: "oreo cupcake",
    price: 90,
    tag: "oc",
    Incart: 0,
  },
  {
    name: "strawberry cupcake",
    price: 90,
    tag: "sc",
    Incart: 0,
  },

  {
    name: "belgium cupcake",
    price: 90,
    tag: "bc",
    Incart: 0,
  },

  {
    name: "caramel cupcake",
    price: 90,
    tag: "crc",
    Incart: 0,
  },

  {
    name: "jamdot",
    price: 150,
    tag: "jd",
    Incart: 0,
  },

  {
    name: "chocolate ",
    price: 170,
    tag: "cb",
    Incart: 0,
  },

  {
    name: "nuts",
    price: 160,
    tag: "nb",
    Incart: 0,
  },

  {
    name: "coconut",
    price: 160,
    tag: "ccb",
    Incart: 0,
  },

  {
    name: "xeeera",
    price: 150,
    tag: "zb",
    Incart: 0,
  },

  {
    name: "naan khatai",
    price: 150,
    tag: "nk",
    Incart: 0,
  },

  {
    name: "chicken",
    price: 55,
    tag: "ch",
    Incart: 0,
  },

  {
    name: "samosa",
    price: 40,
    tag: "s",
    Incart: 0,
  },

  {
    name: "mini pizza",
    price: 110,
    tag: "mp",
    Incart: 0,
  },

  {
    name: "gralic bread",
    price: 80,
    tag: "gb",
    Incart: 0,
  },

  {
    name: "sandwhich",
    price: 75,
    tag: "sw",
    Incart: 0,
  },

  {
    name: "plain cake",
    price: 210,
    tag: "pc",
    Incart: 0,
  },

  {
    name: "eggs",
    price: 120,
    tag: "e",
    Incart: 0,
  },

  {
    name: "rusk",
    price: 110,
    tag: "r",
    Incart: 0,
  },

  {
    name: "Bread",
    price: 50,
    tag: "b",
    Incart: 0,
  },

  {
    name: "butter",
    price: 210,
    tag: "bt",
    Incart: 0,
  },

  {
    name: "maska bun",
    price: 70,
    tag: "mb",
    Incart: 0,
  },
];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    console.log("clicked");
    cartnumbers(product[i]);
    totalCost(product[i]);
    displaycart();
  });
}

function onloadCartNumber() {
  let productNumber = localStorage.getItem("cartnumbers");

  if (productNumber) {
    document.querySelector(".cart-item").textContent = productNumber;
  }
}

function cartnumbers(product) {
  let productNumber = localStorage.getItem("cartnumbers");

  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartnumbers", productNumber + 1);
    document.querySelector(".cart-item").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartnumbers", 1);
    document.querySelector(".cart-item").textContent = 1;
  }
  setItem(product);
}

function setItem(product) {
  let cartitem = localStorage.getItem("product");
  cartitem = JSON.parse(cartitem);

  if (cartitem != null) {
    if (cartitem[product.tag] == undefined) {
      cartitem = {
        ...cartitem,
        [product.tag]: product,
      };
    }
    cartitem[product.tag].Incart += 1;
  } else {
    product.Incart = 1;
    cartitem = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("product", JSON.stringify(cartitem));
}

function totalCost(product) {
  let cost = localStorage.getItem("totalCost");
  if (cost != null) {
    cost = parseInt(cost);
    localStorage.setItem("totalCost", cost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displaycart() {
  let cartitems = localStorage.getItem("product");
  cartitems = JSON.parse(cartitems);
  let productcontainer = document.querySelector(".productss");

  console.log(cartitems);

  if (cartitems && productcontainer) {
    productcontainer.innerHTML = "";
    Object.values(cartitems).map((item) => {
      productcontainer.innerHTML += `
            <div class="productss">
            <i class="far fa-times-circle"></i>
            <img style="width: 50px; height: 50px;" src="./cartimages/${item.tag}.jpg">
            <span>${item.name}</span>
             </div>
             `;
    });
  }
}

displaycart();
onloadCartNumber();

function on() {
  document.getElementById("overlay").style.display = "block";
  console.log("clicked");
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// let shop = document.getElementById('but');
// let card = document.getElementById('overlay');

// shop.addEventListener('click' , function(){
//     console.log('clicked');
//     card.classList.toogle('card');
// })
