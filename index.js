var c = document.getElementById("gamecanvas")
var ctx = c.getContext("2d") 


// Red Square :) 

let x = c.width / 2
    let y  = c.height - 30
    
    //interval the ball will move 
    let dx = 2;
    let dy = -2;
function draw(){
    console.log(x)
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
} 

setInterval(draw,10)