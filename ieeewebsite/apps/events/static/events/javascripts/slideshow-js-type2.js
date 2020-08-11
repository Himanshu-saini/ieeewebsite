document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    startSlideshow();
});

function startSlideshow(){
    window.currentSlide = 0;
    activeSlide(0);
    window.timer = setTimeout(moveSlide, 5000,1);
}

function moveSlide(num){  
    clearTimeout(window.timer);  // clear setTimeout function
    window.previousSlide = window.currentSlide;
    window.currentSlide = window.currentSlide + num;
    setSlide();   // change slide
    setBullet();  // change Active Bullet
    window.timer = setTimeout(moveSlide,5000,1);
}

function setSlide()  // set active slide to window.currentSlide
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

    var scrollWidth = parseInt(container.offsetWidth);
    var margin = slides[0].offsetLeft;
    var dummyWdith = dummy[0].offsetLeft;
    var width = slides[0].offsetWidth;
    var elemntLength = width+margin/2+dummyWdith;
    var leftpos= parseInt(container.scrollLeft);
    var newScrollPosition = elemntLength*window.currentSlide ;
    console.log(scrollWidth,width,margin/2,leftpos)
    console.log((newScrollPosition)-(elemntLength*window.previousSlide ))
    
    slides[window.previousSlide].classList.remove("zoom-slide");
    slides[window.currentSlide].classList.add("zoom-slide");
    
    container.scrollTo({left:newScrollPosition,behavior: 'smooth'});
}

function activeSlide(num){   // set active slide to num
    clearTimeout(window.timer);  // clear setTimeout function
    window.previousSlide = window.currentSlide;
    window.currentSlide = num;
    setSlide();   // change slide
    setBullet();  // change Active Bullet
    window.timer = setTimeout(moveSlide,5000,1);
}

function setBullet(){
    var container = document.getElementsByClassName("slide-bullets")[0];
    var bullets = container.getElementsByClassName("bullets");
    bullets[window.previousSlide].classList.remove("active-bullet");
    bullets[window.currentSlide].classList.add("active-bullet");
}
