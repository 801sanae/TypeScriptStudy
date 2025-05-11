/**
 * unknown 타입 전체 상위 타입
 */

function getLength(x: unknown) {
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
}

/*
 * never 타입 , 공집합
 */

function neverExam(){
    function neverExam():never{
        while(true){}
    }

    let num : number = neverExam();
    let str : string = neverExam();
    let bool : boolean = neverExam();

    let never : never
}

/*
 * void 타입
 */

function voidExam(){
    function voidExam():void{
        console.log("hello");
    }

    let void1 : number = undefined
    let void2 : string = undefined);
    let void3 : boolean = voidExam();

    let voidType : void