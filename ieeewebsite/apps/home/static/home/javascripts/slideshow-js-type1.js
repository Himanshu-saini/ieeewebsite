document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    startSlideshow();
});

function startSlideshow(){
    window.currentSlide = 0;
    activeSlide(0);
    window.timer = setTimeout(moveSlide, 4000,1);
}

function moveSlide(num){  
    clearTimeout(window.timer);  // clear setTimeout function
    window.previousSlide = window.currentSlide;
    window.currentSlide = window.currentSlide + num;
    setSlide();   // change slide
    setBullet();  // change Active Bullet
    window.timer = setTimeout(moveSlide,4000,1);
}

function setSlide(m){
    var row = document.getElementById("slide-id")
    var w = parseInt(row.scrollWidth);
    var slides = document.getElementsByClassName("slide-col");
    var totalSlides = slides.length;
    
    if (window.currentSlide < 0){
        window.currentSlide= totalSlides-1;
    }
    else if (window.currentSlide>=totalSlides){
        window.currentSlide=0;
    }

    var width = slides[0].offsetWidth;
    var newScrollPosition = width*window.currentSlide ;

    row.scrollTo({left:newScrollPosition,behavior: 'smooth'});
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
    var container = document.getElementById("slide-bullets");
    var bullets = container.getElementsByClassName("bullets");
    bullets[window.previousSlide].classList.remove("active-bullet");
    bullets[window.currentSlide].classList.add("active-bullet");
}
