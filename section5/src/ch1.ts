/**
 * 인터페이스 확장 -> 상속 
 * type도 확장 가능
 * 객체타입이면 확장가능
 */

type Animal1 = {
    name : string;
    age : number;
}

interface Animal{
    name : string;
    age : number;
}

interface Dog {
    name: string;
    age: number;
    isBarking: boolean;
}

interface Cat {
    name: string;
    age: number;
    isMeowing: boolean;
}

// 중복된 선언

// -> 인터페이스 확장
interface Dog1 extends Animal {
    // name : "Buddybuddy"
    // 다시 정의하는 타입이 원본타입의 subtype이어야됨.
    // name : number; // 에러
    isBarking: boolean;
}

interface Dog2 extends Animal1{
    isBarking: boolean;
}

const dog : Dog1 ={
    name: "Buddy",
    age: 3,
    isBarking: true
}

const dog1 : Dog2 = {
    name: "Buddy",
    age: 3,
    isBarking: true
}

console.log(dog);
console.log(dog1);


/**
 * 다중 확장(상속)
 * 모든타입을 가지고 있는 다중확장가능
 */

interface DogCat extends Dog, Cat {
    isBarking: boolean;
    isMeowing: boolean;
}

const dogCat: DogCat = {
    name: "Buddy",
    age: 3,
    isBarking: true,
    isMeowing: false
};
