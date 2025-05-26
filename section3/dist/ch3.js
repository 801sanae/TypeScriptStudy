/**
 * unknown 타입 전체 상위 타입 super 타입 교집합
 * 모든 타입의 상위 타입
 * upcasting 하여 모든 변수 할당 가능
 * 반대로 downcasting 할 수 없음
 */
function unknownEx(x) {
    // upcasting O
    let a = 10;
    let b = "hello";
    let c = true;
    let d = [1, 2, 3];
    let e = { name: "kim" };
    let f = null;
    let g = undefined;
    let h = Symbol("symbol");
    let i = BigInt(10);
    let j = () => { console.log("hello"); };
    let k = new Date();
    let l = new Map();
    let m = new Set();
    let n = new WeakMap();
    let o = new WeakSet();
    let p = new ArrayBuffer(10);
    // downcasting X
    // let test : number = p; // Error: Type 'unknown' is not assignable to type 'number'.
    // let test2 : string = a; // Error: Type 'unknown' is not assignable to type 'string'.
    // let test3 : boolean = b; // Error: Type 'unknown' is not assignable to type 'boolean'.
    // let test4 : object = c; // Error: Type 'unknown' is not assignable to type 'object'.
}
/*
 * never 타입 , 공집합 - 모든 타입의 서브타입
 */
function neverEx() {
    function neverExam() {
        while (true) { }
    }
    // never 타입은 어떤 타입에도 할당할 수 없다.
    // 하지만 어느타입이라도 never 타입으로 할당할 수 있다. (upcasting 이기 떄문)
    let num = neverExam();
    let str = neverExam();
    let bool = neverExam();
    let never;
}
/*
 * void 타입
 * undefined보다 super 타입
 */
function voidEx() {
    function voidExam() {
        console.log("hello");
        // return undefined; // void 타입은 undefined를 반환할 수 있다.
    }
}
/**
 * any 타입
 * 타입 계층도를 무시하는거같다.
 * 모든 타입의 상위 타입, 모든 타입의 하위 타입(never 타입 제외)
 * upcasting, downcasting 모두 가능
 */
function anyExame() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar; // downcasting 가능
    undefinedVar = anyVar; // downcasting 가능
    // neverVar = anyVar;  // 공집합, 어떤타입도 downcasting 할 수 없다.
}
export {};
