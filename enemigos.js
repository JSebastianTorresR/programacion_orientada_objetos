class Enemigo{
    constructor(x,y){
        this.x=x
        this.y=y
    }

    show(){
        fill("purple")
        ellipse(this.x,this.y,60,60)
    }
}