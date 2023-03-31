/*global document: false */

// this code block if for enabling the navigation bar to be displayed at the bottom of the header as a menu
//  by changing its class name (adding or remove the word active) every time the hamburger class element is clicked
var hamburger = document.querySelector(".hamburger");
var navBar = document.querySelector(".navbar");


hamburger.onclick = function () {
    // "use strict";
    navBar.classList.toggle("active");
};



// this code is for the button that get us to the top of the page

var topButton = document.getElementById("topBtn");

// use the functionForScroll to display the top button only if we scroll down
window.onscroll = function(){functionForScroll()};


function functionForScroll(){

    let distance  = window.scrollY;

    if ( distance > 40) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}


// if user clicks on top button goes back to the top of the page at the header.
function goToTop(){


    let topEl = document.getElementById("navbar");
    window.scrollTo({ top: topEl, behavior: 'smooth'});

}









