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
                var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 150);
ctx.stroke();

        }
})();
