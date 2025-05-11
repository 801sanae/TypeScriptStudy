/*
    let user: object= {
        id:1,
        name:"kim"
    }
*/
// 객체 리터럴타입
let user = {
    id: 1,
    name: "kim"
};
//구조적 타입 시스템
console.log(user.id);
console.log(user.name);
console.log(user["id"]);
console.log(user["name"]);
user = {
    name: "kim"
};
let config = {
    apikey: "1234"
};
export {};
// config.apikey = "5678"; // // error: Cannot assign to 'apikey' because it is a read-only property
/*
    구조적 타입 시스템 타입스크립트
    객체 리터럴 타입
    옵셔널 프로퍼티 ?
    readonly 프로퍼티
*/ 
