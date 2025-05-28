/**
 * 타입 단언 (Type Assertion)
 * 타입 단언은 TypeScript에게 "이 값은 특정 타입이라고 확신한다"라고 알려주는 방법입니다.
 */

type Person = {
  name: string;
  age: number;
}

// 상황 #1 : 빈객체 선언후 프로퍼티 추가시 에러;
// let person1 : Person = {};   
// person1.age = 30; // 오류: 'age' 속성이 'Person' 형식에 없습니다.
// person1.name = "John"; // 오류: 'name' 속성이 'Person' 형식에 없습니다.

// 상황 #2 : 타입을 뺴주고 빈객체가 됨
// let person2 = {};   
// person2.age = 30; // 오류: 'age' 속성이 'Person' 형식에 없습니다.
// person2.name = "John"; // 오류: 'name' 속성이 'Person' 형식에 없습니다.

// 상황 #3 : any -> 지양하자.
let person3: any = {};

// 결론 : 타입 단언을 사용하여 빈 객체를 Person 타입으로 선언
let person4 = {} as Person; // 타입 단언을 사용하여 빈 객체를 Person 타입으로 선언
person4.age = 30; // 정상: 'age' 속성이 'Person' 형식에 있습니다.
person4.name = "John"; // 정상: 'name' 속성이 'Person' 형식에 있습니다.
console.log(person4); // { age: 30, name: 'John' }


type Dog = {
    name: string;
    color: string;
}

// 리터럴 초기화시 -> 초기 프로퍼티 검사를 진행하여 에러를 발생시킵니다.
// let dog1: Dog = {
//     name: "멍멍이",
//     color: "white",
//     breed: "푸들" // 오류: 'breed' 속성이 'Dog' 형식에 없습니다.
// }

// 타입 단언으로 
let dog2 = {
    name: "멍멍이",
    color: "white",
    breed: "푸들"
} as Dog;

/*
 * 타입 단언 규칙
 * expression : 값 as 단언 <-- 단언식
 * A as B
 * A는 B의 supertype이다.
 * A는 B의 subtype이다.
 */

let num1 = 10 as never; // never은 subtype, 공집합
let num2 = 10 as unknown; // unknown은 supertype, 전체집합

// let num3 = 10 as string
// number as string 교집합이 없는타입, sub, super 도 아님 , 서로소 집합

// 다중 단언은 최소한으로, 지향,, 권장되지않음.
let num3 = 10 as unknown as string

/**
 * const 단언 (const assertion)
 * const 단언은 TypeScript에게 "이 값은 변경되지 않을 것"이라고 알려주는 방법입니다.
 * const 단언을 사용하면 TypeScript는 해당 값의 타입을 더 좁게 추론합니다.
 */
// 객체 타입과 잘 사용된다고 함.
let num4 = 10 as const; // const 단언을 사용하여 num4를 상수로 선언

// const 단언을 사용하여 객체를 상수로 선언
// 객체의 프로퍼티는 읽기 전용이 됩니다.
// 이 객체는 더 이상 수정할 수 없습니다.
let cat = {
    name: "야옹이",
    color: "black"
} as const;


/**
 * non-null 단언 (Non-null assertion)
 * non-null 단언은 TypeScript에게 "이 값은 null이나 undefined가 아니다"라고 알려주는 방법입니다.
 */

type Post = {
    title: string;
    autor?: string; // ? null 또는 undefined가 될 수 있는 프로퍼티
};

let post: Post = {
    title: "타입스크립트",
    // autor: "홍길동" // 이 프로퍼티는 선택적입니다.
};

const len1 : number = post.autor!.length; // 무조건 잇다. author

// const len2 : number = post.autor?.length; // non-null 단언을 사용하여 autor가 null이나 undefined가 아님을 보장합니다.
