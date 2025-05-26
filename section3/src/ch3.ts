// 객체 타입의 호환성

let num1: number  = 10; // number 타입
let num2: 10 = 10; // 리터럴 타입

// number 타입은 리터럴 타입의 상위 타입 
// Upcasting
num1 = num2

// 객체간 타입관계

/**
 * 구조적 타입 시스템
 * 프로퍼티로 기준으로 결정되는 객체 타입간의 호환성
 */

type Animal = {
    name: string;
    color: string;
}
type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal : Animal = {
    name: "기린이",
    color: "yellow"
}
let dog : Dog = {
    name: "멍멍이",
    color: "white",
    breed: "푸들"
}

animal = dog; // Upcasting 가능
// dog = animal; // Downcasting 불가능, Dog 타입은 Animal 타입의 하위 타입이 아니기 때문


type book = {
    title: string;
    price: number;
}
type ebook = {
    title: string;
    price: number;
    fileSize: number;
}

let book1 : book;

let ebook1 : ebook = {
    title: "이것이 자바스크립트다",
    price: 30000,
    fileSize: 500
}

/**
 * 초과 프로퍼티 검사
 * 초기화 할때 , 
 */
let book2 : book = {
    title: "이것이 자바스크립트다",
    price: 30000,
    // fileSize: 500
}

book2 = ebook1; // <- 이렇게는 가능 객체 리터럴 초기화가 아니기떄문