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

    draw();
}

function draw()
{
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
