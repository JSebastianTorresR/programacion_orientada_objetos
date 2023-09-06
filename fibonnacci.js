
function fibonnaci(num, i=0, num1=0, num2=1){
    if (num == i) return num2
    return fibonnaci(num, i+1, num2, num1+num2)
}