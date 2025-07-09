/**
 * 인터페이스
 * 메소드의 오버로딩 구현시 호출시그니쳐로 구현가능
 * 객체타입에 특화
 */
const person = {
    // const person : Person = {
    name: "kmy",
    // age: 37
    sayHi: function () {
        return "hi";
    },
};
export {};
// person.name = "kmy1"; // readonly가능
/**
 * 인터페이스는 I를 붙이곤한다.
 * ex) IPerson
 * 파스칼, 카멜, 스네이크 컨벤션을 주로 쓰지만,
 * 상황에 맞게 사용.
 */ 
