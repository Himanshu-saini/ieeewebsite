document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    window.currentSlide = 0;
    window.timer = setTimeout(moveSlide, 5000,1);
});

function moveSlide(num){
    clearTimeout(window.timer);
    window.previousSlide = window.currentSlide;
    window.currentSlide = window.currentSlide + num;
    setSlide();
    window.timer = setTimeout(moveSlide,5000,1)
}

function setSlide()
{
    var container = document.getElementsByClassName("slides-container")[0];
    var slides = container.getElementsByClassName("slide-col");
    var dummy = container.getElementsByClassName("dummy");
    var totalSlides = slides.length;
    
    if (window.currentSlide < 0){
        window.currentSlide= totalSlides-1;
    }
    else if (window.currentSlide>=totalSlides){
        window.currentSlide=0;
    }

    var scrollWidth = parseInt(container.scrollWidth);
    var margin = slides[0].offsetLeft;
    var width = slides[0].offsetWidth;
    var elemntLength = width+margin;
    var leftpos= parseInt(container.scrollLeft);
    var newScrollPosition = elemntLength*window.currentSlide;
    // alert(elemntLength+" "+(slides[1].offsetLeft-slides[0].offsetLeft));
    slides[window.previousSlide].classList.remove("zoom-slide");
    slides[window.currentSlide].classList.add("zoom-slide");
    // slides[window.currentSlide].scrollIntoView();
    container.scrollTo({left:newScrollPosition,behavior: 'smooth'});
}
