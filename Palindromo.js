
let str;

function palindromo(str){
    strReverse=str.split("").reverse().join("");

    if (strReverse==str){
        console.log("La palabra es palindromo")
    }
    else{
        console.log("La palabra no es palindromo")
    }

    return
}
