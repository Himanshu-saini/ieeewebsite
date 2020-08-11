function showmenu()   // for mobile view
{
    var menu = document.getElementById("menu-icon");
    var arrow = document.getElementById("arrow-icon");
    var x = document.getElementById("nav-list");
    if (x.style.transform == 'translate(0%, 0%)') {
        x.style.transform = "translate(100%,0%)";
        menu.style.display = "block";
        arrow.style.display = "none";
    } 
    else {
        x.style.transform = "translate(0%,0%)";
        menu.style.display = "none";
        arrow.style.display = "block";
    }
}

window.addEventListener('DOMContentLoaded', function(){    // Toggle Header Navigation bar background
    var block = document.getElementsByClassName('slide-div-full')[0];     // get slideshow element of the page
    if(block != undefined){
        var nav = document.getElementById('navbar');
        nav.classList.remove('solid-nav');
        window.addEventListener('scroll', function(){
            var nav = document.getElementById('navbar');
            var blockHeight = parseInt(block.offsetHeight);
            var navHeight = parseInt(nav.offsetHeight);
            var togglePoint = blockHeight - navHeight;
            var windowScrollY = parseInt(window.scrollY);   // get the scroll position of the window 
            if(windowScrollY >= togglePoint)                      // 580 is length of slideshow div
                nav.classList.add('solid-nav');
            else
                nav.classList.remove('solid-nav');
        });
    }
});


