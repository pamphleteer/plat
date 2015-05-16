(function() {
        var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);

        function resizeCanvas() {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;

                /**
                 * Your drawings need to be inside this function otherwise they will be reset when
                 * you resize the browser window and the canvas goes will be cleared.
                 */
                snake();
        }
        resizeCanvas();

        function snake() {
              // do your drawing stuff here

              canvas.onmousemove = function moveCircle () {
                  context.beginPath();
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  //ctx.moveTo(0,0);
                  context.arc(event.clientX,event.clientY,50,0,2*Math.PI);
                  context.stroke();
                  context.closePath();
              }

              //ctx.moveTo(200, 200);
              //ctx.lineTo(300, 150);
              //ctx.stroke();
        }
})();
