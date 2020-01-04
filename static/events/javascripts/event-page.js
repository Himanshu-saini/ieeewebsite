function showinfo(x){
    var index = [ "Techblocks5.1","Techblocks5.2", "Xenith"];
    // console.log(index);
    var val = x.textContent.replace(/\s/g,'');
    console.log( val);
    i = index.indexOf(val);
    console.log(i);
    var column = document.getElementsByClassName("event-info")[i];
    // console.log(column.style.display);
    if(column.style.display == "grid"){
        column.style.display="none";
    }
    else{
        column.style.display="grid";
    }
}

