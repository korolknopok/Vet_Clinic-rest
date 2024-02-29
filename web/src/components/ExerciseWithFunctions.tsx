type Operator = '+' | '-' | '*' | '/';
function calculate(num1 : number, num2 : number, operator : Operator) : number {
    let result: number;
    switch (operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                return num1 / num2
            } else {
                throw new Error('Division by zero');
            }
    }
    return result;
}

console.log(calculate(5,5,'+'));
console.log(calculate(10,2,'-'));
console.log(calculate(10,7,'*'));
console.log(calculate(70,7,'/'));

