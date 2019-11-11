function expand_column(x){
    var column = x.parentElement.parentElement;
    console.log(column.style.height);
    if(column.style.height == "90vh"){
        column.style.width='50%';
        column.style.height="54vh";
    }
    else{
        column.style.width='100%';
        column.style.height="90vh";
    }
}