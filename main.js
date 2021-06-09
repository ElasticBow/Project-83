var mouseEvent="empty";

canvas =
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Canvas.addEventListener("mousedown, my_mousedown");
var color="color";
var width_of_line="width_of_line";
var radius="radius";

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) 
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown") {
        console.log("current position of x and y coordinates=");
        console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2 * Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
console.log("my_touchmove")
     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }