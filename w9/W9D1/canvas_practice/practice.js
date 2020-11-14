document.addEventListener("DOMContentLoaded", function(){
    
});
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

//*Rectangle
//fill color
ctx.fillStyle = "turquoise"
//fillRect(fromLeft, fromTop, width, height )
// * ctx.fillRect(100, 100, 100, 50);


//*Circle
ctx.beginPath();
//arc(fromLeft, fromTop, positiveRadius, startAngle, endAngle)
ctx.arc(100,100,75,0,2*Math.PI);
ctx.strokeStyle = "salmon";
ctx.lineWidth = 10;
//needed to draw path
ctx.stroke();
//to fill in shapes
ctx.fillStyle = 'lightblue';
ctx.fill();
