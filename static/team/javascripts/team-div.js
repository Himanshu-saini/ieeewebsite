window.onload = function(){
    //randomize_prev_team();
    //create_team_pyramid();
    create_team_layout();
}

function create_team_pyramid()
{
    var team_col =  document.getElementsByClassName("member-container");
    var team_no = team_col.length;
    for(var i=0;i<team_no;i++)
    {
        var mem_col = team_col[i].getElementsByClassName("member-col");
        var mem_no = mem_col.length;
        var team_col_width = team_col[i].getBoundingClientRect().width;
        var mem_col_width = mem_col[0].getBoundingClientRect().width * 1.1;
        var py_base = Math.floor(team_col_width/mem_col_width);
        console.log(i, team_col_width, mem_col_width,py_base);
        var margin = 5;
        mem_col[mem_no-1].style.marginRight = String(margin*3)+'vw';
        
        if(mem_no-1 >= py_base){
            mem_col[py_base].style.marginLeft = String(margin)+'vw';
        }
        if(mem_no-1 >= 2*py_base-2){
            mem_col[2*py_base-2].style.marginRight = String(margin)+'vw';
        }
        if(mem_no-1 >= 2*py_base-1){
            mem_col[2*py_base-1].style.marginLeft = String(margin*2)+'vw';
        }
        if(mem_no-1 >= 3*py_base-4){
            mem_col[3*py_base-4].style.marginRight = String(margin*2)+'vw';
        }
        if(mem_no-1 >= 3*py_base-3){
            mem_col[3*py_base-3].style.marginLeft = String(margin*3)+'vw';
        }
        
    } 
}


function create_team_layout()
{
    var team_div =  document.getElementsByClassName("team-div-2");
    var team_col =  team_div[0].getElementsByClassName("member-container");
    var team_no = team_col.length;
    console.log(team_no);
    for(var i=0;i<team_no;i++)
    {
        var mem_col = team_col[i].getElementsByClassName("member-col");
        var mem_no = mem_col.length;
        var team_col_width = team_col[i].getBoundingClientRect().width;
        var mem_col_width = mem_col[0].getBoundingClientRect().width * 1.1;
        
        var py_base = Math.floor(team_col_width/(mem_col_width));
        console.log(i, team_col_width, mem_col_width,py_base);
        var margin = 10 ;
        //mem_col[mem_no-1].style.marginRight = String(margin*3)+'vw';
        
        if(mem_no-1 >= py_base){
            mem_col[py_base].style.marginLeft = String(margin)+'vw';
            console.log(py_base);
        }
        if(mem_no-1 >= 3*py_base){
            console.log(3*py_base);

            mem_col[3*py_base].style.marginLeft = String(margin)+'vw';
        }
        
    }
}

// window.addEventListener('scroll', function(){
//     var col = document.getElementsByClassName("prev-team");
//     x = col[0].getBoundingClientRect();
//     if (x.top - window.innerHeight < -100) {
//         rotate_frame();
//     }
//     else{
//         var frame = col[0].getElementsByClassName("member-col");
//         for(var i=0;i<frame.length;i++)
//         {
//             frame[i].style.animation = '';
            
//         }
//     }
// });
    
// function randomize_prev_team()
// {
//     var area = document.getElementsByClassName("prev-team")[0];
//     var col = area.getElementsByClassName("member-col");
//     var col_num = col.length;
    
//     for(var i =0;i<col_num/2;i++)
//     {
//         var rn = Math.random()*2;
//         var radius = 4;
//         col[i].style.width = String(2*radius+rn)+"vw";
//         col[i].style.height = String(2*radius+rn)+"vw";
//         col[col_num - i-1].style.width = String(2*radius+rn)+"vw";
//         col[col_num - i-1].style.height = String(2*radius+rn)+"vw";
//     }
// }

function rotate_frame()
{
    var area = document.getElementsByClassName("prev-team")[0];
    var col = area.getElementsByClassName("member-col");
    var col_num = col.length;
    for(var i =0;i<col_num;i++)
    {
        var rotate_deg = 20;
        col[i].style.animation = 'card-move .8s ease-in forwards';
        col[i].style.animationDelay = String(i/10)+"s";
        col[i].style.transform = "rotate("+String(Math.pow(-1,i)*rotate_deg)+"deg)";    
        
    }

}

// function frame_move(element)
// {
//     element.style.animation = "frame-move 1s ease-in-out 1 alternate";
//     setTimeout(frame_reset,1000,element);
// }
// function frame_reset(element)
// {
//     element.style.animation = "none";
// }