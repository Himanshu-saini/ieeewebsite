function showmenu()
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