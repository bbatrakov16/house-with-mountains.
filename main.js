// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Sky
ctx.fillStyle = "rgba(0, 178, 255, 1)";
ctx.fillRect(0, 0, 500, 236);

// Clearing
ctx.fillStyle = "rgba(0, 190, 87, 1)";
ctx.fillRect(0, 236, 500, 164);

// House (square)
ctx.fillStyle = "rgba(148, 92, 61, 1)";
ctx.fillRect(350, 200, 100, 100);

// House (triangle)
ctx.fillStyle = "rgba(137, 77, 44, 1)";
ctx.beginPath();
ctx.moveTo(320, 200);
ctx.lineTo(400, 120);
ctx.lineTo(480, 200);
ctx.lineTo(320, 200);
ctx.fill();

// House window
ctx.fillStyle = "rgba(171, 230, 255, 1)";
ctx.fillRect(383, 230, 35, 35);

ctx.strokeStyle = "black";
ctx.strokeRect(383, 230, 36, 36);

// Window framers
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(401, 230);
ctx.lineTo(401, 265);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(383, 248);
ctx.lineTo(419, 248);
ctx.stroke();

// Mountain (left)
ctx.fillStyle = "rgba(204, 204, 204, 1)";
ctx.beginPath();
ctx.moveTo(0, 236);
ctx.lineTo(230, 236);
ctx.lineTo(115, 60);
ctx.lineTo(0, 236);
ctx.fill();

// Mountain (right)
ctx.fillStyle = "rgba(154, 154, 154, 1)";
ctx.beginPath();
ctx.moveTo(90, 236);
ctx.lineTo(300, 236);
ctx.lineTo(195, 10);
ctx.lineTo(90, 236);
ctx.fill();

// Mountain snow (left)
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(70, 130);
ctx.lineTo(115, 60);
ctx.lineTo(143, 105);
ctx.lineTo(122, 100);
ctx.lineTo(115, 132);
ctx.lineTo(102, 115);
ctx.lineTo(70, 130);
ctx.fill();
ctx.stroke();

// Mountain snow (right)
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(158, 90);
ctx.lineTo(195, 10);
ctx.lineTo(234, 95);
ctx.lineTo(200, 70);
ctx.lineTo(185, 115);
ctx.lineTo(177, 90);
ctx.lineTo(158, 90);
ctx.fill();
ctx.stroke();

// Cristmas tree
ctx.fillStyle = "rgba(137, 77, 44, 1)";
ctx.fillRect(98, 300, 4, 25);

ctx.fillStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();
ctx.moveTo(40, 300);
ctx.lineTo(156, 300);
ctx.lineTo(98, 200);
ctx.lineTo(40, 300);
ctx.fill();

ctx.fillStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();
ctx.moveTo(50, 260);
ctx.lineTo(145, 260);
ctx.lineTo(97.5, 190);
ctx.lineTo(50, 260);
ctx.fill();

ctx.fillStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();
ctx.moveTo(60, 230);
ctx.lineTo(134, 230);
ctx.lineTo(97, 170);
ctx.lineTo(60, 230);
ctx.fill();

ctx.fillStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();

// tree
ctx.fillStyle = "rgba(137, 77, 44, 1)";
ctx.fillRect(300, 325, 4, 55);

ctx.fillStyle = "rgba(0, 229, 105, 1)";
ctx.strokeStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();
ctx.arc(301, 290, 29.5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "rgba(0, 229, 105, 1)";
ctx.strokeStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();
ctx.arc(325, 320, 29.5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "rgba(0, 229, 105, 1)";
ctx.strokeStyle = "rgba(0, 144, 66, 1)";
ctx.beginPath();
ctx.arc(277, 320, 29.5, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Birds (image)
let birdsImg = document.getElementById("birds-img");
ctx.drawImage(birdsImg, 275, 0, 141, 142);

// Title
ctx.fillStyle = "rgba(171, 230, 255, 1)";
ctx.font = "15px Inter";
ctx.fillText("Figma & Java Script Canvas", 20, 385);
