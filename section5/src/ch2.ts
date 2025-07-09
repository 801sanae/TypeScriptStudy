/**
 * 선언 합침? declaration merging
 * 충돌
 * 인터페이스 확장 경우엔 서브타입이면 가능하였지만,
 * 프로퍼티 재선언시 동일한 타입으로 선언해야됨.
 */

// type Person = {
//     name : string;
// }

// type Person = {
//     name : string;
// }

// --> 타입은 중복 선언시 오류발생하나, 


interface Person {
    name : string;
}

interface Person {
    age : number;
}

// 인터페이스는 중복 선언시 합쳐짐.

const p : Person = {
    name: "kmy",
    age: 37
}

console.log(p);



/**
 * 모듈 보강
 * 모듈 확장
 * 모듈 보강은 인터페이스 확장과 유사
 * 모듈 보강은 인터페이스 확장과 달리, 
 * 모듈의 프로퍼티를 추가하는 것.
 * 
 * 모듈 보강은 타입스크립트에서만 지원하는 기능.
 */

interface Lib {
    version: string;
    author: string;
}
// 모듈보강?
interface Lib {
    comment: string;
}

const lib: Lib = {
    version: "1.0.0",
    author: "kmy",
    comment: "이 라이브러리는 타입스크립트로 작성되었습니다."
}