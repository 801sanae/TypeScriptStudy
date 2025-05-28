/**
 * 터입 좁히기?
 * 조건문으로 넓은 타입에서 좁은타입으로
 * 타입 상황에 따라 좁히는 방법?
 */

// val => number : toFixed()
// val => string : toUpperCase()
function func(val : number | string) {
    val; // string | number 타입
    if (typeof val === "number") { // number 타입 -> number 타입 보장? 좁히기
        console.log(val);
        return val.toFixed(2); // number 타입의 메서드 사용
    } else if(typeof val === "string") { // string 타입 -> string 타입 보장? 좁히기
        console.log(val);
        return val.toUpperCase(); // string 타입의 메서드 사용
    }
}

type Person = {
    name: string;
    age: number;
}

// val => number : toFixed()
// val => string : toUpperCase()
// val-=> Date : getTime()
// val => Person : name는 age살입니다. 
function func1(val : number | string | Date | null | Person) {
    val; // string | number 타입
    if (typeof val === "number") { // number 타입 -> number 타입 보장? 좁히기
        console.log(val);
        return val.toFixed(2); // number 타입의 메서드 사용
    } else if(typeof val === "string") { // string 타입 -> string 타입 보장? 좁히기
        console.log(val);
        return val.toUpperCase(); // string 타입의 메서드 사용
    } else if(val instanceof Date) { // Date 타입 -> Date 타입 보장? 좁히기
    // } else if(typeof val === 'object') { 
        console.log(val);
        return val.getTime(); // Date 타입의 메서드 사용
    } else if( val && 'age' in val){
    // } else if ('age' in val && typeof val.age === 'number') { // Person 타입 -> Person 타입 보장? 좁히기
        console.log(val);
        return `${val.name}는 ${val.age}살입니다.`; // Person 타입의 프로퍼티 사용
    }
}