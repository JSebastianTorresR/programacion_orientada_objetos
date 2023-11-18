class Nave{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    
    show() {
        fill(255)
        rectMode(CENTER)
        rect(this.x, this.y,20,60)    
    }

    move(dir){
        this.x +=dir*5
    }
}