// main.js

// Get the canvas element
var canvas = document.getElementById("comicsCanvas");
var ctx = canvas.getContext("2d");

// Function to draw a comic book-style border with a question mark in the center
function drawComicBorder(x, y) {
    // Outer border
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.strokeRect(x, y, 160, 220);

    // Inner border
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(x + 10, y + 10, 140, 200);

    // Red line around the border
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 160, y);
    ctx.lineTo(x + 160, y + 220);
    ctx.lineTo(x, y + 220);
    ctx.closePath();
    ctx.stroke();

    // Dots on the corners
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 20, 20);
    ctx.fillRect(x + 140, y, 20, 20);
    ctx.fillRect(x, y + 200, 20, 20);
    ctx.fillRect(x + 140, y + 200, 20, 20);

    // Question mark in the center
    ctx.font = '40pt Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('?', x + 70, y + 120);
}

// Draw five comic book borders
drawComicBorder(10, 10);
drawComicBorder(180, 10);
drawComicBorder(350, 10);
drawComicBorder(520, 10);
drawComicBorder(690, 10);
