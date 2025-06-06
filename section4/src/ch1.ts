/**
 * 함수 타입 표현식과 호출 시그니쳐
 * 
 * 함수의 타입을 별도로 정의하는 방법
 */

/**
 * 함수 타입 표현식 , function type expression
 * 함수의 매개변수와 반환값의 타입을 정의하는 방법
 */

type Operation = (a: number, b: number) => number;


// const add: (a: number, b: number) => number = (a, b) => a + b;
const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;  

/**
 * 함수 호출 시그니쳐, function call signature
 * 함수의 매개변수와 반환값의 타입을 정의하는 방법
 * 
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string; // 함수의 이름을 추가할 수 있다.
};

const add2: Operation2 = (a, b) => a + b;
const subtract2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;    

// 함수 호출 시그니쳐를 사용하여 함수의 이름을 추가할 수 있다.
// 하이브리드 타입
// add2는 함수 타입과 객체 타입을 결합한 하이브리드 타입이다.
// add2는 함수 타입이면서 name 속성을 가진 객체 타입이다.
add2(1, 2); // 3
add2.name = "덧셈 함수";
