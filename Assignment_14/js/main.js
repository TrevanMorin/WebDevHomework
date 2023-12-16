// main.js

// Get the canvas element
var canvas = document.getElementById("comicsCanvas");
var ctx = canvas.getContext("2d");

// Draw comic book-style borders
function drawComicBorders() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw comic book borders
    for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.strokeRect(10 + i * 180, 10, 160, 220);

        ctx.fillStyle = "black";
        ctx.font = "40px Comic Sans MS";
        ctx.fillText("?", 75 + i * 180, 130);
    }
}

// Redraw the comic borders when the window is resized
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = 240;
    drawComicBorders();
});

// Initial draw
drawComicBorders();
