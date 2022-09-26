"use strict";

const btnBurger = document.getElementById("btnBurger");
const btnClose = document.getElementById("btnClose");
const desple = document.querySelector('.desple');
btnBurger.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
desple.addEventListener("click", toggleMenu);

const btnPrevious = document.getElementById("arrow_left");
const btnNext = document.getElementById("arrow_right");

const slider_container = document.querySelector(".slider_container");
const slider = document.querySelector(".slider-wraper");

const slider_discover = document.querySelector(".slider_discover");
const slider_text = document.querySelector(".slider_text");


function toggleMenu(){
    let navbar = document.querySelector('.navbar_content');
    navbar.classList.toggle("show");
    desple.classList.toggle("show");
}

const sliderNavigateNext= ()=>{
    slider_container.scroll({
        left: `${slider_container.scrollLeft + slider.offsetWidth}` ,
        behavior: 'smooth'
    });
    slider_discover.scroll({
        top: `${slider_discover.scrollTop + slider_text.offsetHeight}` ,
        behavior: 'smooth'
    });
}

const sliderNavigatePrevious = ()=>{

    slider_container.scroll({
        left: `${slider_container.scrollLeft - slider.offsetWidth}` ,
        behavior: 'smooth'
    });
    slider_discover.scroll({
        top: `${slider_discover.scrollTop - slider_text.offsetHeight}` ,
        behavior: 'smooth'
    });
}
const trackpad = (e)=>{
    // e.preventdefault()
    if (e.code == 'ArrowRight') {
        sliderNavigateNext();
    }else if(e.code == 'ArrowLeft'){
        sliderNavigatePrevious();
    }
}
slider_container.addEventListener("keydown", trackpad);
slider_discover.addEventListener("keydown", trackpad);

btnPrevious.addEventListener("click", sliderNavigatePrevious);
btnNext.addEventListener("click", sliderNavigateNext);