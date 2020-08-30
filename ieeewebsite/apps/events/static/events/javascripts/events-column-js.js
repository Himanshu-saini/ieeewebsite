function moveColumn(arrow,num){
    var parentContainer = arrow.parentElement;
    var container = parentContainer.getElementsByClassName("scroll-container")[0];
    var columns = container.getElementsByClassName("event-column");
    var containerScrollWidth = container.scrollWidth;
    var containerViewWidth = container.offsetWidth;
    var scrollPosition  = container.scrollLeft;

    var columnStyle = window.getComputedStyle(columns[0]);
    var margin =parseInt(columnStyle.marginRight);
    var width = parseInt(columnStyle.width);
    var newScrollPosition = scrollPosition + num*(width+margin) ;

    if (newScrollPosition < -margin/2){
        newScrollPosition = containerScrollWidth - containerViewWidth - margin*2/3;
    }
    else if (newScrollPosition >= containerScrollWidth - containerViewWidth){
        newScrollPosition = 0;
    }

    container.scrollTo({
        top:0,
        left:newScrollPosition,
        behavior: 'smooth'});
}