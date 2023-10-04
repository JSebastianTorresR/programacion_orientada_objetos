let jugador;
let tamaño = 30;
let q0;
let comida1;
let comida2;
 

function setup() {
  createCanvas(400, 400);
  createCanvas(6* Quadrille.CELL_LENGTH, 4*Quadrille.CELL_LENGTH);
  q0 = createQuadrille(6,4)
  jugador = new serpiente()
  frameRate(10)
  comida1= new comida()
  comida2= new comida()
  
}

function draw() {
  background("yellow");
  drawQuadrille(q0)
  jugador.update()
  jugador.show()
  
  comida1.show()
  comida2.show()
  

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    jugador.dir(0, -1)
  }else if(keyCode === DOWN_ARROW){
    jugador.dir(0,1)
  }else if(keyCode === RIGHT_ARROW){
    jugador.dir(1,0)
  }else if(keyCode === LEFT_ARROW){
    jugador.dir(-1,0)
  }
}
