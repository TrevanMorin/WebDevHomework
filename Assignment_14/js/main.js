// Function to draw a red border around the canvas
function drawBorder() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Draw a red border around the canvas
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, c.width - 10, c.height - 10);
}

// Call the drawBorder function when the page loads
window.onload = drawBorder;