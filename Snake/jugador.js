function serpiente(){
  this.x = 0
  this.y = 0
  this.movx = 0
  this.movy = 0
  
  this.dir = function(x,y){
    this.movx = x
    this.movy = y 
  }
  
  this.update = function(){
    this.x = this.x + this.movx * tamaño
    this.y = this.y + this.movy * tamaño
    
    this.x = constrain(this.x, 0, width-tamaño)
    this.y = constrain(this.y, 0, height-tamaño)
    
  }
  
  this.show = function(){
    fill("green")
    rect(this.x, this.y, tamaño, tamaño)
    
    
    
  }
  

}
