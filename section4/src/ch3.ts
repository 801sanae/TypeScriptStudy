/**
 * 함수 오버로딩
 * 오버로드 시그니쳐, 구현 시그니쳐
 */

// 함수버전? -> 오버로드 시그니처 
function func(a: number): void;
function func(a: number, b: number, c: number): void;


// // function func(){};
// function func(a: number) : void {
//     console.log(a);
// }
// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
    console.log(a, b, c);
    if( typeof b === 'number' && typeof c === 'number') {
        console.log(a, b, c);
    }else{
        console.log(a);
    }
}
