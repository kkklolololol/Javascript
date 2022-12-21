<!DOCTYPE html>
<html>
  <head>
    <title>Square Movement</title>
  </head>
  <body>
    <!-- Create the canvas element -->
    <canvas id="canvas" width="500" height="500"></canvas>

    <script>
      // Get the canvas and rendering context
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      // Set the initial position of the square
      let x = 50;
      let y = 50;

      // Set the size of the square
      const size = 50;

      // Draw the square on the canvas
      function drawSquare() {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(x, y, size, size);
      }

      // Handle keydown events
      function handleKeydown(event) {
        switch (event.key) {
          case 'ArrowLeft':
            x -= 5;
            break;
          case 'ArrowUp':
            y -= 5;
            break;
          case 'ArrowRight':
            x += 5;
            break;
          case 'ArrowDown':
            y += 5;
            break;
        }
      }

      // Attach the keydown event handler to the document
      document.addEventListener('keydown', handleKeydown);

      // Create a loop to redraw the square on the canvas
      function update() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the square
        drawSquare();

        // Request the next frame
        requestAnimationFrame(update);
      }

      // Start the loop
      update();
    </script>
  </body>
</html>
