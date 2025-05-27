/**
 *  대수 타입
 * --> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * --> 합집합 타입과 교집합 타입이 있음.
 */

// 1. 합집합 타입 (Union Type)

let a: string | number;
a = 1;
a= "hello";

let b: string | number | boolean;

b = true;
b = "world";
b = 42;

let arr: (string | number | boolean)[] = [1,'hello', true, 42, 'world'];

type dog = {
    name: string;
    color: string;
}

type person = {
    name: string;
    language: string;
}

type UnionType = dog | person;

// dog 타입으로 사용가능
let union1: UnionType = {
    name: "",
    color : "",
}
// person 타입으로도 사용가능
let union2: UnionType = {
    name: "",
    language : "",
}
// 교집합적
let union3: UnionType = {
    name: "",
    color: "",
    language: "",
}
// 프로퍼티가 공통되는것만 선언시 에러
// name은 
/*
let union4: UnionType = {
    name: ""
}
    */

// 2. 교집합 타입 (Intersection Type)
// 기본타입끼리 교집합 타입만들면 never임 보통
// 겹치는 타입이 없기떄문?일듯
// 객체타입에서 많이 사용된다고 함
let var1: number & string; // never 타입

type intersection = dog & person;

// 설명에서는 // dog 타입과 person 타입의 프로퍼티가 모두 포함된 타입이라고 함
// 교집합이라함은 A 와 B의 공통된 프로퍼티가 잇을떄 교집합이라고 하는데
// dog, person 타입 모두의 프로퍼티를 가진다함은 합집합의 의미로 보는데 헤깔림
// 다시 체크해서 봐야될부분.
let intersection1: intersection = {
    name: "",
    color: "",
    language: ""
}
