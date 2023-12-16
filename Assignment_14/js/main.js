// main.js

// Get the canvas element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw a comic book-style border around an image
function drawComicBorder() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Outer border
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

    // Inner border
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);

    // Red line around the border
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(5, 5);
    ctx.lineTo(canvas.width - 5, 5);
    ctx.lineTo(canvas.width - 5, canvas.height - 5);
    ctx.lineTo(5, canvas.height - 5);
    ctx.closePath();
    ctx.stroke();

    // Dots on the corners
    ctx.fillStyle = "black";
    ctx.fillRect(5, 5, 20, 20);
    ctx.fillRect(canvas.width - 25, 5, 20, 20);
    ctx.fillRect(5, canvas.height - 25, 20, 20);
    ctx.fillRect(canvas.width - 25, canvas.height - 25, 20, 20);
}

// Redraw the comic border when the window is resized
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawComicBorder();
});

// Initial draw
drawComicBorder();
