// 타입계층도 및 기본타입 확인

/**
 * unknown 타입 전체 상위 타입 super 타입 교집합
 * 모든 타입의 상위 타입 
 * upcasting 하여 모든 변수 할당 가능
 * 반대로 downcasting 할 수 없음
 */

function unknownEx(x: unknown) {
    // upcasting O
    let a : unknown = 10;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = [1, 2, 3];
    let e : unknown = { name: "kim" };
    let f : unknown = null;
    let g : unknown = undefined;
    let h : unknown = Symbol("symbol");
    let i : unknown = BigInt(10);
    let j : unknown = () => { console.log("hello") };
    let k : unknown = new Date();
    let l : unknown = new Map();
    let m : unknown = new Set();
    let n : unknown = new WeakMap();
    let o : unknown = new WeakSet();
    let p : unknown = new ArrayBuffer(10);  

    // downcasting X
    // let test : number = p; // Error: Type 'unknown' is not assignable to type 'number'.
    // let test2 : string = a; // Error: Type 'unknown' is not assignable to type 'string'.
    // let test3 : boolean = b; // Error: Type 'unknown' is not assignable to type 'boolean'.
    // let test4 : object = c; // Error: Type 'unknown' is not assignable to type 'object'.
}

/*
 * never 타입 , 공집합 - 모든 타입의 서브타입
 */

function neverEx(){
    function neverExam():never{ // 반환하는 타입이 아무것도 없다.
        while(true){}
    }
    // never 타입은 어떤 타입에도 할당할 수 없다.
    // 하지만 어느타입이라도 never 타입으로 할당할 수 있다. (upcasting 이기 떄문)
    let num : number = neverExam();
    let str : string = neverExam();
    let bool : boolean = neverExam();

    let never : never
}

/*
 * void 타입
 * undefined보다 super 타입
 */

function voidEx(){
    function voidExam():void{ // undefined보다 super 타입
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

function anyExame(){
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;

    let neverVar : never;

    anyVar = unknownVar; // downcasting 가능
    undefinedVar = anyVar; // downcasting 가능

    // neverVar = anyVar;  // 공집합, 어떤타입도 downcasting 할 수 없다.
}