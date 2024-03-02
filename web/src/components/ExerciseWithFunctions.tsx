// Ex1

// type Operator = '+' | '-' | '*' | '/';
// function calculate(num1 : number, num2 : number, operator : Operator) : number {
//     let result: number;
//     switch (operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 return num1 / num2
//             } else {
//                 throw new Error('Division by zero');
//             }
//     }
//     return result;
// }
//
// console.log(calculate(5,5,'+'));
// console.log(calculate(10,2,'-'));
// console.log(calculate(10,7,'*'));
// console.log(calculate(70,7,'/'));

//Ex2

// interface Shape {
//     getForm() : string;
//     getId() : number;
// }
//
// class Circle implements Shape {
//     private id: number;
//     constructor(id: number) {
//         this.id = id;
//     }
//     getForm(): string {
//         return 'Circle';
//     }
//     getId(): number {
//         return this.id;
//     }
// }
//
// class Square implements Shape {
//     private id: number;
//     constructor(id:number) {
//         this.id = id;
//     }
//     getForm(): string {
//         return 'Square'
//     }
//     getId() : number {
//         return this.id;
//     }
// }
//
// class Tringle implements Shape {
//     private id: number;
//     constructor(id: number) {
//         this.id = id;
//     }
//     getForm(): string {
//         return 'Tringle';
//     }
//     getId(): number {
//         return this.id;
//     }
// }
//
// function printShapeInfo(shape:Shape): void {
//     console.log(`Id: ${shape.getId()}, Form: ${shape.getId()}`);
// }
//
// const circle = new Circle(1);
// const square = new Square(2);
// const tringle = new Tringle(3);
//
// printShapeInfo(circle);
// printShapeInfo(square);
// printShapeInfo(tringle);

//Ex 3

// function convert(first: () => number,second:(num:number) => string): string {
//     const firstResult = first();
//     return second(firstResult);
// }

//Ex 4

// function printResult() {
//     console.log(convert(() => 5,(num) => `Number is ${num}`));
// }
//
// printResult();

//Ex 5  Дженерик функция, принимающая на вход объект любого типа и число n,
// а возвращающая массив объектов этого же типа, состоящий из n копий переданного объекта.

//Ex 5

// function createArray<T>(obj: T, n: number): T[] {
//     const arr: T[] = [];
//     for(let i = 0; i < n; i++) {
//         arr.push(obj);
//     }
//     return arr;
// }
//
// const obj = {name: 'Artem', age: 20};
// const n = 3;
// const result = createArray(obj,n);
// console.log(result);

//Ex 6

// interface Shape {
//     id: number;
// }
//
// interface TwodShape extends Shape {
//     area: number;
// }
//
// interface TreedShape extends Shape {
//     capacity: number;
// }
//
// function draw(shape: Shape) {
//     if ('area' in shape) {
//         draw2d(shape as TwodShape);
//     } else if ('capacity' in shape) {
//         draw3d(shape as TreedShape);
//     } else {
//         throw new Error('Unsupported shape type');
//     }
// }
//
// function draw2d(shape: TwodShape): void {
//     console.log(`Drawing 2d object with id ${shape.id} and area ${shape.area}`);
// }
//
// function draw3d(shape: TreedShape): void {
//     console.log(`Drawing 3d object with id ${shape.id} and capacity ${shape.capacity}`);
// }