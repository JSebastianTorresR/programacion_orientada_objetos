function fibonacci(num, i=0, num1=0, num2=1, sec=[0]){
    if (num == i) return sec
    sec.push(num2)
    return fibonacci(num, i+1, num2, num1+num2, sec)
}
