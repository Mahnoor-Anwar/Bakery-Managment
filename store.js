var marginY = 4;
var destination = 6;
var speed = 5;
var scroller = null;

function ScrollFun(element){
    destination = document.getElementById(element).offsetTop;

    scroller = setTimeout(function(){
        ScrollFun(element);
    },1)

    marginY = marginY + speed;

    if(marginY >= destination){
        clearTimeout(scroller);
    }
    window.scroll(0 , marginY);
}
