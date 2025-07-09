/**
 * 클래스
 */


let p = {
    name: "kim",
    age: 37 ,
    grade : "A",
    study(){
        console.log("공부하기");
    },
    intro(){
        console.log(`안녕하세요. ${this.name}입니다. 나이는 ${this.age}세이고, 학점은 ${this.grade}입니다.`);
    }
}
// 중복코드 발생
let p1 = {
    name: "kim1",
    age: 37 ,
    grade : "A",
    study(){
        console.log("공부하기");
    },
    intro(){
        console.log(`안녕하세요. ${this.name}입니다. 나이는 ${this.age}세이고, 학점은 ${this.grade}입니다.`);
    }
}
// 클래스 사용
class Person {
    name;
    age;
    grade;
    
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log("공부하기");
    }

    intro() {
        console.log(`안녕하세요. ${this.name}입니다. 나이는 ${this.age}세이고, 학점은 ${this.grade}입니다.`);
    }
}
