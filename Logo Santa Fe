let button;
let bgcolor;
let slider1;
let slider2;
let texto;
let button2;


function setup() {
  createCanvas(400, 400);
  frameRate(30); 
  bgcolor=color("red")
  lgcolor=("red")
  button=createButton("Cambiar fondo");
  button.mousePressed(changeColor);
  
  button2=createButton("Cambiar logo")
  button2.mousePressed(changeLgColor)
  
  slider1=createSlider(20,100,45,10);
  slider2=createSlider(20,100,65,10);
  //input=createInput("")
  
}

function changeColor(){
  bgcolor=color(random(255),random(255),random(255));
}

function changeLgColor(){
  lgcolor=color(random(255),random(255),random(255));
}


function draw() {
  background (bgcolor);
  fill("white")
  rect(125, 50, 180, 250, 0, 0, 40, 40);
  console.log(frameRate());
  
  fill(lgcolor)
  circle(260, 250, slider1.value())
  
  fill(lgcolor)
  rect(125, 50, 180, slider2.value());
  
  fill("white")
  texto=text("Santa fe",150,90)
  texto.textSize(35)
  texto.textStyle("BOLD")
  //nameP.html(input.value());

}
