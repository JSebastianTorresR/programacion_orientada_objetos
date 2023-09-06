const anagrama = (str1, str2)  => {
    const AUXSTR1 = str1.toLowerCase()
    const AUXSTR2 = str2.toLowerCase()
    if(str1.length !== str2.length) return false

    const obj1 = contarLetras(AUXSTR1)
    const obj2 = contarLetras(AUXSTR2)
    
    let aux = true

    for (let element in obj1){
        aux = aux && (obj1[element]==obj2[element])
        if(!aux) return aux
    }
    console.log(obj1)
    console.log(obj2)
    return aux
} 

function contarLetras(str){
    let aux = true
    let vistos = {}
    for(let i = 0; i < str.length; i++){
        if(!vistos[str[i]]){
            vistos[str[i]] = 1
        }
        else{
            vistos[str[i]] += 1
        }
    }
    return vistos
}