function preload() {
    img_load=loadImage('panda.jpg')
}

function setup() { 
    canvas=createCanvas(640,480);
    tintcolor="";
}

function draw() {
    image(img_load,0,0,640,480)
    tint(tintcolor)
}

function filtertint() {
    tintcolor=document.getElementById("cor").value;
}

function aplicarblur() {
    img_load.filter(BLUR,2)
}

function takeSnapshot() {
    save("foto.png")
}
