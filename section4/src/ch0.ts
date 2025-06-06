/**
 * 함수 타입 정의
 */

function func(a: number, b: number){
  return a + b;
}

/**
 * arrow 함수 타입 정의
 */

const add = (a: number, b: number): number =>  a+b;

/**
 * 함수 매개변수
 * - 필수 매개변수는 선택 매개변수보다 앞에 위치해야 된다.
 */

function introduce(name = "김민영", tall?: number) : string{
// function introduce(name = "김민영", tall?: number, age: number) : string{  // 매개변수 age는 필수 매개변수로 선언됨
// function introduce(name = "김민영", tall: number) : string{
if( typeof tall === "number" ){
    return `안녕하세요, ${name}은 ${tall}cm입니다.`;
}else{
    return `안녕하세요, ${name}입니다.`;
}

}

// introduce(1);  // 타입 오류: 매개변수는 string이어야 합니다.
introduce("김민영", 175);  // 올바른 호출

introduce("김민영");  // 올바른 호출

getSum(1,2);
getSum(1,2,3,4,5);  
getSum(1,2,3,4,5,6,7,8,9,10);  

/**
 * 
 * @param numbers 가변 인자 함수
 * - 가변 인자 함수는 매개변수 앞에 ...을 붙여서 정의한다.
 * - 가변 인자 함수는 매개변수로 전달된 인자들을 배열로 처리한다.
 * - 가변 인자 함수는 매개변수의 개수가 정해져 있지 않다.
 * @returns 가변인자의 sum
 * - 가변 인자 함수는 매개변수로 전달된 인자들의 합을 반환한다.
 */

// 가변 인자 함수의 매개변수 갯수를 제한 할때 
// function getSum(...numbers: number[number,number]): number {
function getSum(...numbers: number[]): number {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
    // return numbers.reduce((acc, cur) => acc + cur, 0);
}