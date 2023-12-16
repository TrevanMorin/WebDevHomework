// js/main.js

// Add your JavaScript code for canvas interactions, animations, etc.

// Example: Simple comic book panel effect using HTML5 canvas
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('comicPanel');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // Draw a simple border around the canvas
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Example: Draw a speech bubble
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(100, 0);
        ctx.lineTo(150, 50);
        ctx.stroke();
        ctx.font = '14px Arial';
        ctx.fillText('Hello, comic world!', 55, 25);
    }
});
