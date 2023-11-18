let nave;
let enemigo = [];
let disparo = [];

function setup() {
  createCanvas(600, 400);
  nave = new Nave(width/2,390)

  for(var i = 0; i<5; i++){
    enemigo[i] = new Enemigo(i*80+80,60)
  }
  

}

function draw() {
  background(51);
  nave.show()
  for(var i = 0; disparo.length; i++){
    disparo.show()
    disparo.move() 
  }
  
  for(var i = 0; enemigo.length; i++){
    enemigo[i].show()
  }
  
}

function keyPressed(){
  if(key === ""){
    disparo=new Disparo(nave.x,nave.y)
    disparo.push(disparo)
  }
  if (keyCode === RIGHT_ARROW){
    nave.move(1)
  }else if (keyCode===LEFT_ARROW){
    nave.move(-1)
  }
}
