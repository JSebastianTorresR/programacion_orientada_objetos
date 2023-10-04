function comida(){
  this.loc=createVector(random(width), random(height))
  
  this.show=function(){
    fill("pink")
    rect(this.loc.x,this.loc.y, tamaño, tamaño)
  }
}
