document.addEventListener("DOMContentLoaded", function(){
});

//grabs id of canvas from the document
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

//*Rectangle
// // fill color
// ctx.fillStyle = "turquoise"
// //fillRect(fromLeft, fromTop, width, height )
// ctx.fillRect(100, 100, 100, 50);


//*Circle
// ctx.beginPath();
// //arc(fromLeft, fromTop, positiveRadius, startAngle, endAngle)
// ctx.arc(100,100,75,0,2*Math.PI);
// ctx.strokeStyle = "salmon";
// ctx.lineWidth = 10;
// //needed to draw path
// ctx.stroke();
// //to fill in shapes
// ctx.fillStyle = 'lightblue';
// ctx.fill();

//*Cloud
ctx.beginPath();
ctx.arc(100,100,50,40,25);
ctx.strokeStyle = "lightblue";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(85, 150, 50, 0, 4);
ctx.strokeStyle = "lightblue";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(145, 170, 50, 0, 2.5);
ctx.strokeStyle = "lightblue";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(170, 100, 50, 4, 6.5);
ctx.strokeStyle = "lightblue";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(230, 145, 55,4.5, 8.6);
ctx.strokeStyle = "lightblue";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(160, 255, 55, 0,.5);
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 255, 55, 0, .5);
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(50, 255, 55, 0, .5);
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(115, 305, 55, 0, .5);
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(65, 305, 55, 0, .5);
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.arc(15, 305, 55, 0, .5);
ctx.strokeStyle = "lightgray";
ctx.lineWidth = 10;
ctx.stroke();



