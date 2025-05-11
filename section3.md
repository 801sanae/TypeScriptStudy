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