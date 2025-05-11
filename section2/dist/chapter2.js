// 배열
let numArr = [1, 2, 3, 4, 5];
let numArr1 = [1, 2, 3, 4, 5]; // 제네릭 타입
let strArr = ["a", "b", "c"];
let strArr1 = ["a", "b", "c"]; // 제네릭 타입
let boolArr = [true, false, true];
let boolArr1 = [true, false, true]; // 제네릭 타입
let nullArr = [null, null, null];
let nullArr1 = [null, null, null]; // 제네릭 타입
let undefinedArr = [undefined, undefined, undefined];
let anyArr = [1, "a", true, null, undefined];
// 튜플
let tuple1 = [1, "a"];
let tuple1_1 = [1, "a"];
let tuple2 = [1, "a", true];
let tuple3 = [1, "a", true]; // ?는 선택적 속성
let tuple4 = [1, "a", true, false, true]; // 나머지 매개변수
tuple4[0] = 2; // 1
tuple4[1] = "b"; // "a"
tuple4[2] = false; // true
tuple4[3] = true; // false
tuple4[4] = false; // true
tuple4[5] = true; // undefined
export {};
