function showmenu()
{
    var menu = document.getElementById("menu-icon");
    var arrow = document.getElementById("arrow-icon");
    var x = document.getElementById("nav-list");
    console.log(x.style.right);
    if (x.style.right == '0%') {
        x.style.right = "-60%";
        menu.style.display = "block";
        arrow.style.display = "none";
    } 
    else {
        x.style.right = "0%";
        menu.style.display = "none";
        arrow.style.display = "block";
    }
}