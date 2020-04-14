var socket;
var slider;
var red;
var green;
var blue;

function setup() {
    slider = createSlider(1, 100, 50);
    createCanvas(600, 600);
    background(51);



    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}



function newDrawing(data) {
    noStroke();
    fill(data.r, data.g, data.b);
    ellipse(data.x, data.y, data.sliderVal, data.sliderVal);
}

function clearCanvas() {
    clear();
    background(51);
}

function mouseDragged() {
    //console.log('Sending: ' + mouseX + ',' + mouseY);
    red = document.getElementById('red').value;
    green = document.getElementById('green').value;
    blue = document.getElementById('blue').value;
    
    console.log('Slider value: ' + slider.value());
    var data = {
        x: mouseX,
        y: mouseY,
        sliderVal: slider.value(),
        r: red,
        g: green,
        b: blue
    }

    socket.emit('mouse', data);

    noStroke();
    //fill(255);
    fill(red, green, blue);
    ellipse(mouseX, mouseY, slider.value(), slider.value());
}

function draw() {
    
}