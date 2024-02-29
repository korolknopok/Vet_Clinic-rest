function calculate(num1 : number, num2 : number, operator : string) : number {
    let result : number

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error('Invalid operator');
    }

    return result;
}

console.log(calculate(5,5, '+'));
console.log(calculate(10,9, '-'));
console.log(calculate(10,5, '*'));
console.log(calculate(70,10,'/'));
