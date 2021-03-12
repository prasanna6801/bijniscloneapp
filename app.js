
let navbar = document.querySelector('nav');
var scrollPrev = window.pageYOffset;
window.onscroll = function(){
var scrollCur = window.pageYOffset;
if(scrollPrev < scrollCur){
navbar.style.top = "0px";
}else{
navbar.style.top = "-100px";

}
}
const navslide = () => {
    const burger = document.querySelector('#menu-icon');
    const downbar = document.querySelector('.hidebar');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
    });
}

navslide();

const navside = () => {
    const dots = document.querySelector('#dots');
    const sidebar = document.querySelector('.sidebar');
    const clear = document.querySelector('#clear');

    dots.addEventListener('click', () => {
        sidebar.classList.toggle('side-active');
    });
    
    clear.addEventListener('click', () => {
        sidebar.classList.toggle('side-active');
    });
}

navside();

const tabs = document.getElementsByClassName('tab-links');
 for(i=0; i<tabs.length;i++){
     tabs[i].addEventListener('click', function(){
         this.classList.toggle('active')
     })     
 }

 const slider = document.querySelector('.slider');
 const leftArrow = document.querySelector('.left');
 const rightArrow = document.querySelector('.right');

 var sectionIndex = 0;

 leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1: 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
});

 rightArrow.addEventListener('click', function() {
     sectionIndex = (sectionIndex < 2) ? sectionIndex + 1: 2;
     slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
 });