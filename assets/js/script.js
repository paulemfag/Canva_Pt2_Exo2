var c = document.getElementById('c1');
var ctx = c.getContext('2d');

ctx.fillStyle="white";
ctx.beginPath();
ctx.moveTo(150, 70);
// ctx.lineTo(200, 20);
// ctx.lineTo(225, 70);
ctx.quadraticCurveTo(200, 5, 250, 70);
ctx.fill();
ctx.stroke();

ctx.fillStyle="#e0e1f3";
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(200, 20, 350, 100);
ctx.fill();
ctx.stroke();

ctx.fillStyle="#e0e1f3";
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(200, 180, 350, 100);
ctx.fill();
ctx.stroke();
