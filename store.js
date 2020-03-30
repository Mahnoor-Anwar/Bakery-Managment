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

