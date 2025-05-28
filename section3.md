# 업캐스팅, 다운캐스팅

**number Type과 number Literal Type 관계**

슈퍼 타입에 하위 타입을 할당하는것은 ㅇㅋ < -- **업캐스팅** <br>
서브 타입에 슈퍼 타입을 할당하는것은 ㄴㄴ < -- **다운캐스팅**

```js
let num1 : number = 10;
let num2 : 10 = 10;

num1 = num2 // true

num2 = num1 // false error
```

# 타입 계층도
<img src="img/타입계층도.png"  width="800px"/>



# 객체 타입의 호환성

 * 구조적 타입 시스템
 * 프로퍼티로 기준으로 결정되는 객체 타입간의 호환성


# 타입의 대수

Union, Intersection 타입
타입을 합집합적으로 선언가능<br><br>
**Union**
1. 일반타입
```javascript
let a: string | number;
a = 1;
a= "hello";

let b: string | number | boolean;

b = true;
b = "world";
b = 42;
```

<br>

2. array도 가능
```javascript
let arr: (string | number | boolean)[] = [1,'hello', true, 42, 'world'];
```


3. 객체도 가능
```javascript

type dog = {
    name: string;
    color: string;
}

type person = {
    name: string;
    language: string;
}

type UnionType = dog | person;

// dog 타입으로 사용가능
let union1: UnionType = {
    name: "",
    color : "",
}
// person 타입으로도 사용가능
let union2: UnionType = {
    name: "",
    language : "",
}
// 교집합적
let union3: UnionType = {
    name: "",
    color: "",
    language: "",
}
```
<br><br>
**Intersection**
- 기본타입끼리 교집합 타입만들면 never임 보통
- 겹치는 타입이 없기떄문?일듯
- 객체타입에서 많이 사용된다고 함

```javascript
let var1: number & string; // never 타입

type intersection = dog & person;

// 설명에서는 // dog 타입과 person 타입의 프로퍼티가 모두 포함된 타입이라고 함
// 교집합이라함은 A 와 B의 공통된 프로퍼티가 잇을떄 교집합이라고 하는데
// dog, person 타입 모두의 프로퍼티를 가진다함은 합집합의 의미로 보는데 헤깔림
// 다시 체크해서 봐야될부분.
let intersection1: intersection = {
    name: "",
    color: "",
    language: ""
}

```


# 타입추론

1. 일반적인 상황( 변수선언 및 할당 )
```javascript
let a = 10; // number 타입을 추론한다.
let b = "hello"; // string 타입을 추론한다.
```

**구조분해 할당?**
```javascript
let c = {
    id:1,
    name : "홍길동",
    age: 30,
    profile:{
        height: 175,
        weight: 95
    },
    url: "801sanae.github.io"
}

// 구조분해 할당을 통해 id, name, profile의 타입을 추론한다.
let {id, name, profile} = c; 

// 구조분해 할당을 통해 one, two, three의 타입을 추론한다.
let [one, two, three] = [1,"hello", true]; 
```
<br><br>
**Fuction의 타입추론**
<br>
- 반환값을 기존으로 추론함.<br>
- 파라미터터는 기본값을 기준으로 추론함.

```javascript
// function fuc2(param = 10){
function fuc(){
    return "hello world";
}
```

**any 타입의 진화**
- implicit any -> explicit any와 다름
- any 타입은 타입스크립트에서 모든 타입을 허용하는 타입
<br>

```javascript
let d; // any
d = 10; // number 타입으로 추론된다.
d = "hello"; // string 타입으로 추론된다.
d.toUpperCase(); // string 타입의 메서드를 사용할 수 있다.
d = true; // boolean 타입으로 추론된다.
d = [1,2,3]; // number[] 타입으로 추론된다.
```
> 데이터 할당 후 할당된 데이터 타입으로 추론된다.

<br><br>

```javascript
let f: any;

f = 10;
f = "hello";
f.toUpperCase();
```
> 모두 any

<br><br>
**const**

```javascript
// const로 선언된 변수는 타입을 추론할 수 없다. 
// 따라서 e의 타입은 number이다.
// 리터럴로 추론 number 10으로 추론됨.
const e = 10; 

// union 타입으로 추론됨
// const로 선언된 변수는 타입을 추론할 수 없다. 따라서 g의 타입은 string이다.
const g = "hello"; 

// 유니온으로 추론됨, 최적으로 공통 타입으로
// h의 타입은 (number | string | boolean)[]로 추론된다.
let h = [1,"hello", true]; 
```

<br><br>

**let, const**
- 타입넓히기를 통해 범용적으로 변수를 쓸 수 있다.