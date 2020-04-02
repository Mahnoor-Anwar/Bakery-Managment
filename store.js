
//sroll
var marginY = 0;
var destination = 0;
var speed = 30;
var scroller = null;

function ScrollFun(element){
    destination = document.getElementById(element).offsetTop;

    scroller = setTimeout(function(){
        ScrollFun(element);
    },7)

    marginY = marginY + speed;

    if(marginY >= destination){
        clearTimeout(scroller);
    }
    window.scroll( 0, marginY);
}

//item-numbers

const button = document.querySelectorAll('.btn');

let product = [
    {
        name: 'chovolate cupcake' , 
        price : 90 , 
        tag : 'cc', 
        Incart : 0
    },

    {
        name: 'vnila cupcake' , 
        price : 90 , 
        tag : 'vc', 
        Incart : 0
    },

    {
        name: 'oreo cupcake' , 
        price : 90 , 
        tag : 'oc', 
        Incart : 0
    },
    {
        name: 'strawberry cupcake' , 
        price : 90 , 
        tag : 'sc', 
        Incart : 0
    },

    {
        name: 'belgium cupcake' , 
        price : 90 , 
        tag :'bc', 
        Incart : 0
    },

    {
        name: 'caramel cupcake' , 
        price : 90 , 
        tag : 'crc', 
        Incart : 0
    },

    {
        name: 'jamdot' , 
        price : 90 , 
        tag : 'jd', 
        Incart : 0
    },

    {
        name: 'chovolate ' , 
        price : 90 , 
        tag : 'cb', 
        Incart : 0
    },

    {
        name: 'nuts' , 
        price : 90 , 
        tag : 'nb', 
        Incart : 0
    },

    {
        name: 'coconut' , 
        price : 90 , 
        tag : 'ccb', 
        Incart : 0
    },

    {
        name: 'xeeera' , 
        price : 90 , 
        tag : 'zb', 
        Incart : 0
    },

    {
        name: 'naan khatai' , 
        price : 90 , 
        tag : 'nk', 
        Incart : 0
    },

    {
        name: 'chicken' , 
        price : 90 , 
        tag : 'ch', 
        Incart : 0
    },

    {
        name: 'samosa' , 
        price : 90 , 
        tag : 's', 
        Incart : 0
    },

    {
        name: 'mini pizza' , 
        price : 90 , 
        tag : 'mp', 
        Incart : 0
    },

    {
        name: 'gralic bread' , 
        price : 90 , 
        tag : 'gb', 
        Incart : 0
    },

    {
        name: 'sandwhich' , 
        price : 90 , 
        tag : 'sw', 
        Incart : 0
    },

    {
        name: 'plain cake' , 
        price : 90 , 
        tag : 'pc', 
        Incart : 0
    },

    {
        name: 'eggs' , 
        price : 90 , 
        tag : 'e', 
        Incart : 0
    },

    {
        name: 'rusk' , 
        price : 90 , 
        tag : 'r', 
        Incart : 0
    },

    {
        name: 'Bread' , 
        price : 90 , 
        tag : 'b', 
        Incart : 0
    },

    {
        name: 'butter' , 
        price : 90 , 
        tag : 'bt', 
        Incart : 0
    },

    {
        name: 'maska bun' , 
        price : 90 , 
        tag : 'mb', 
        Incart : 0
    },


]

for(let  i =0 ; i<button.length; i++){
    button[i].addEventListener('click' , () => {
     console.log('clicked');
        cartnumbers(product[i]);
    })
} 


function onloadCartNumber(){
    
    let productNumber = localStorage.getItem('cartnumbers')

    if (productNumber){
        document.querySelector('.cart-item').textContent = productNumber;
    }
}

function cartnumbers(product){
    console.log('the product click is' , product);

    let productNumber = localStorage.getItem('cartnumbers')

    productNumber = parseInt(productNumber)
    if (productNumber){
        localStorage.setItem('cartnumbers' , productNumber+ 1)
        document.querySelector('.cart-item').textContent = productNumber + 1;
    }else {
    localStorage.setItem('cartnumbers' , 1)
    document.querySelector('.cart-item').textContent = 1;
}
    
}
onloadCartNumber();

function on() {
    document.getElementById("overlay").style.display = "block";
    console.log('clicked');
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  
  