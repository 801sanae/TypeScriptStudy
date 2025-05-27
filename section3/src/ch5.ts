/**
 * 타입추론
 * 
 */

//1. 일반적인 상황( 변수선언 및 할당 )
let a = 10; // number 타입을 추론한다.
let b = "hello"; // string 타입을 추론한다.

// function fuc(param){
//     // 매개변수 param의 타입을 추론한다.
//     console.log(param);
// }

let c = {
    id:1,
    name : "홍길동",
    age: 30,
    profile:{
        height: 175,
        weight: 95
    },
    url: "801sanae.github.io"
}
//구조분해 할당?
let {id, name, profile} = c; // 구조분해 할당을 통해 id, name, profile의 타입을 추론한다.

let [one, two, three] = [1,"hello", true]; // 구조분해 할당을 통해 one, two, three의 타입을 추론한다.

//반환값을 기존으로 추론함.
//파라미터터는 기본값을 기준으로 추론함.
// function fuc2(param = 10){
function fuc(){
    return "hello world";
}

// any 타입의 진화 
// implicit any -> explicit any와 다름
// any 타입은 타입스크립트에서 모든 타입을 허용하는 타입이다.
let d; // any
d = 10; // number 타입으로 추론된다.
d = "hello"; // string 타입으로 추론된다.
d.toUpperCase(); // string 타입의 메서드를 사용할 수 있다.
d = true; // boolean 타입으로 추론된다.
d = [1,2,3]; // number[] 타입으로 추론된다.


let f: any;

//const
const e = 10; // const로 선언된 변수는 타입을 추론할 수 없다. 따라서 e의 타입은 number이다.
// 리터럴로 추론 number 10으로 추론됨.
// union 타입으로 추론됨
const g = "hello"; // const로 선언된 변수는 타입을 추론할 수 없다. 따라서 g의 타입은 string이다.
// 유니온으로 추론됨, 최적으로 공통 타입으로
let h = [1,"hello", true]; // h의 타입은 (number | string | boolean)[]로 추론된다.



// let, const
// 타입넓히기를 통해 범용적으로 변수를 쓸수잇다.