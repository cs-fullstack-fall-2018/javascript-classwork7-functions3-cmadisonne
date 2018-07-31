function main(){
    var num1= 7;
    var num2 = 3;
    alert(product(num1, num2));
    alert(quotient(num1, num2));
}
function product(number1, number2){
    var productOfNums = number1 * number2;
    return productOfNums;
}
function quotient(number1, number2){
    var divideNums = number1 / number2;
    return divideNums
}

main();