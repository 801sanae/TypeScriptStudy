/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 
 * 1. 반환값의 타입의 호환여부
 * 2. 매개변수의 타입의 호환여부
 */

//1 
type A = () => number;
type B = () => 10;

let a : A = () => { return 10; };
let b : B = () => { return 10; };

// upcasting -> ok
a = b; // ok : 10 == number

//number / litral type <- number :: downcasting
// b = a; // error : 10 != number

//2
// 매개 변수의 타입일치 여부
type C = (a: number) => void;
type D = (a: 10) => void;

let c : C = (a) => { return a; };
let d : D = (a) => { return a; };


// c = d;

d = c; 

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc; // upcasting

let testFunc = (animal : Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}

let testFunc2 = (dog : Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// 매개변수의 개수가 다를때
type func1 = (a: number, b: number) => void;
type func2 = (a: number) => void;

let func11 : func1 = (a,b) => {};
let func22 : func2 = (a) => {};

func11 = func22;

// func22 = func11;