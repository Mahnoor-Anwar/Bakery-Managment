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
    price: 120,
    tag: "cc",
    Incart: 0,
  },

  {
    name: "Vanila cupcake",
    price: 120,
    tag: "vc",
    Incart: 0,
  },

  {
    name: "oreo cupcake",
    price: 120,
    tag: "oc",
    Incart: 0,
  },
  {
    name: "strawberry cupcake",
    price: 120,
    tag: "zb",
    Incart: 0,
  },

  {
    name: "belgium cupcake",
    price: 120,
    tag: "bc",
    Incart: 0,
  },

  {
    name: "caramel cupcake",
    price: 120,
    tag: "crc",
    Incart: 0,
  },

  {
    name: "jamdot",
    price: 180,
    tag: "jd",
    Incart: 0,
  },

  {
    name: "chocolate ",
    price: 200,
    tag: "cb",
    Incart: 0,
  },

  {
    name: "nuts",
    price: 180,
    tag: "nb",
    Incart: 0,
  },

  {
    name: "coconut",
    price: 180,
    tag: "ccb",
    Incart: 0,
  },

  {
    name: "xeeera",
    price: 180,
    tag: "zb",
    Incart: 0,
  },

  {
    name: "naan khatai",
    price: 180,
    tag: "nk",
    Incart: 0,
  },

  {
    name: "chicken Pattise",
    price: 55,
    tag: "gb",
    Incart: 0,
  },

  {
    name: "samosa",
    price: 45,
    tag: "s",
    Incart: 0,
  },

  {
    name: "mini pizza",
    price: 80,
    tag: "mp",
    Incart: 0,
  },

  {
    name: "Apple pie",
    price: 110,
    tag: "ap",
    Incart: 0,
  },


  {
    name: "gralic bread",
    price: 100,
    tag: "g",
    Incart: 0,
  },

  {
    name: "sandwhich",
    price: 100,
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
    price: 120,
    tag: "r",
    Incart: 0,
  },

  {
    name: "Bread",
    price: 90,
    tag: "b",
    Incart: 0,
  },

  {
    name: "butter",
    price: 230,
    tag: "bt",
    Incart: 0,
  },

  {
    name: "maska bun",
    price: 80,
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
  let cost = localStorage.getItem("totalCost");
  console.log(cartitems);

  if (cartitems && productcontainer) {
    productcontainer.innerHTML = "";
    Object.values(cartitems).map((item) => {
      productcontainer.innerHTML += `
            <div class="productss">
            <i class="far fa-times-circle" id="rem"></i>
            <img style="width: 50px; height: 50px;" src="./cartimages/${item.tag}.jpg">
            <span>${item.name}</span>
             </div>

            <div class="price">Rs.${item.price}</div>

             <div class=quantity>
             <i class="fas fa-angle-left"></i>
             <span>${item.Incart}</span>
             <i class="fas fa-angle-right"></i>
             </div>

             `;
    });

  productcontainer.innerHTML += `
      <div class="total">
      <br>
      <hr>
      <h3>Total </h3>
        Rs.${cost}
      </div>  
      <br>
      <br>
      
      <div>
        <button id=pop class ="btn btn-danger" style = "font-size: bold">;Done</button>
      </div>
    `;
    
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

const butt = document.getElementById('pop');
const popup = document.querySelector('.popup-wrapper');
const disappear = document.querySelector('.popup-close')
const over = document.querySelector('.overlay');
const rem = document.getElementById('rem');

butt.addEventListener('click' ,() =>{
  popup.style.display= "block";
  over.style.display = "none";
});

disappear.addEventListener('click', () =>{
  popup.style.display="none";
  
})

rem.addEventListener('click' ,() =>{
  product.style.display = "none";
})

