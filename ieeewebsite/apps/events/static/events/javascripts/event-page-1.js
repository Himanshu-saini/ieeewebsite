function showevents(x){
    var container = x.parentElement.parentElement.parentElement;
    // console.log(container);
    var column = container.getElementsByClassName("events-container")[0];
    // console.log(column.style.display);
    if(column.style.display == "flex"){
        column.style.display="none";
    }
    else{
        column.style.display="flex";
    }
}
