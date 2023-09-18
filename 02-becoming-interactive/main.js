var canvas;
var gl;

function initialise()
{
    canvas = document.getElementById("webgl-canvas");
    if(!canvas)
    {
        alert("Unable to get canvas!");
        return;
    }

    gl = canvas.getContext("webgl2");
    if(!gl)
    {
        alert("Unable to initialise WebGL!");
        return;
    }

    gl.clearColor(0.04, 0.23, 0.51, 1.0);

    canvas.onkeydown = handleKeyPressed;
    canvas.onkeyup = handleKeyReleased;

    mainLoop();
}

function handleKeyPressed(event)
{
    console.log(event.code)
    console.log("Key pressed: " + event.keyCode);
    if(event.keyCode == 32)
    {
        console.log("Spacebar was pressed!")
    }
}

function handleKeyReleased(event)
{
    console.log("Key released: " + event.keyCode);
}

function draw()
{
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function mainLoop()
{
    draw();
    window.requestAnimationFrame(mainLoop);
}
