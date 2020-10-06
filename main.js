const slide  = document.querySelector('.slides');

let slides = document.querySelectorAll('.slide');


let index = 0;
const slidewidth = 800;


slide.addEventListener('transitionend',()=>{
    
    slides = document.querySelectorAll('.slide')
    if(index === slides.length-1){
        slide.style.transition = 'none';
        index = 0;
        slide.style.transform  = `translateX(${-slidewidth * index}px)`
    }
})
// startSlide();

setInterval(() =>{
        
    index++;
    slide.style.transform  = `translateX(${-slidewidth * index}px)`
    slide.style.transition = '.7s'
}, 2000);
