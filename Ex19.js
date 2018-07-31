function main(){
    var num1= parseInt(prompt("Enter a number."));
    var num2 = parseInt(prompt("Enter a number."));
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