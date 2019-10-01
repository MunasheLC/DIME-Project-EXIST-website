var Y = 0;
var destination = 0;
var speed = 7;
var scroller;

//top to element/end
function initScroll(elementId) {
    destination = document.getElementById(elementId).offsetTop;	//get offset position of element

    scroller = setTimeout(function(){initScroll(elementId)}, 1); //executes function initScroll, in an interval of 1 second

    Y += speed;

    if (Y >= destination) {		//keep going till its reach destination(position of the element)
        clearTimeout(scroller);	//stops initScroll function from running
    }

    window.scroll(0, Y); //scrolls down from 0 to y pixels

}

window.onscroll = function () {Y = this.pageYOffset;}	//lets you continuously click onto another element and scrolls down without it breaking

//end to top/element
function toTop(elementId) {
    destination = document.getElementById(elementId).offsetTop;
	
    scroller = setTimeout(function (){toTop(elementId);}, 1);

    Y -= speed;

    if (Y <= destination) {
        clearTimeout(scroller);
    }

    window.scroll(0, Y);
}

var slideIn = 0;
showSlides(slideIn);  //calling function showSlides

function currentSlide(n) {
    showSlides(slideIn = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("oneSlides");
    var circles = document.getElementsByClassName("circle");
  
    if (n > slides.length) {
		slideIn = 1;	//count number of slides
	}
	if (n == slides.length+1){	//close slides on last circle
		slideIn=0;
	}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (var i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    slides[slideIn-1].style.display = "block";	
    circles[slideIn-1].className += " active";
}
