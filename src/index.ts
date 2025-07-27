// This is the canvas
const c = document.getElementById("gamecanvas") as HTMLCanvasElement;

// This is the tool used to paint on the canvas
const ctx = c.getContext("2d") as CanvasRenderingContext2D;

let player = { 
    x: 1,
    y: 350,
    width: 50, 
    height: 50,
    speed: 5,
    jumping: false,
};

function drawPlayer() {
    ctx.fillStyle = "blue"
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function movePlayer() { 
    
}
    

function gameLoop() { 
drawPlayer()
}
requestAnimationFrame(gameLoop);








// let x = c.width / 2;
// let y = c.height - 30;

// // interval the ball will move 
// let dx = 2;
// let dy = -2;

// function draw() {
//     ctx.clearRect(0, 0, c.width, c.height);
//     ctx.beginPath();
//     ctx.rect(x, y, 50, 50);
//     ctx.fillStyle = "#FF0000";
//     ctx.fill();
//     ctx.closePath();
//     x += dx;
//     y += dy;
// } 

// setInterval(draw, 10);
