class Disparo{
    constructor(x,y){
        this.x=x
        this.y=y
    }

    show(){
        noStroke()
        fill("blue")
        circle(this.x,this.y,20)

    }
    move(){
        this.y = this.y - 1
    }
}

