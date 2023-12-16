// main.js

// Get the canvas element
var canvas = document.getElementById("comicsCanvas");
var ctx = canvas.getContext("2d");

// Draw the outlines of comic books
function drawComicOutlines() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Comic book outlines
    drawComicOutline(50, 50, 200, 300);  // Example: x, y, width, height
    drawComicOutline(300, 50, 200, 300);
    drawComicOutline(550, 50, 200, 300);

    // You can add more outlines as needed
}

// Function to draw a single comic book outline
function drawComicOutline(x, y, width, height) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, width, height);
}

// Redraw the comic outlines when the window is resized
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawComicOutlines();
});

// Initial draw
drawComicOutlines();
