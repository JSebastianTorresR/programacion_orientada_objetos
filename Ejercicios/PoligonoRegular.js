const poligonoRegular={
   numLados:5,
   longLado: 2,
   perimetro: ()=>this.numLados*this.longLado,
   apotema: ()=> this.longLado / (2 * Math.tan(Math.PI / this.numLados)),
   area: ()=>this.perimetro*this.apotema/2

}

console.log(poligonoRegular.perimetro)
console.log(poligonoRegular.area)

