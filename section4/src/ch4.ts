/**
 * 사용자 정의 타입가드
 */


type Dog = {
    isBark : boolean
}

type Cat = {
    name : string,
    isScratch : boolean
}

type Animal = Dog | Cat;

// return 타입만으로 타입좁히기가 잘 안됨. -> : animal is Dog
function isDog(animal : Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal : Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
}


function warning(animal : Animal) {
    // if("isBark" in animal) {
    if(isDog(animal)) {
        console.log(animal.isBark);
    // } else if("isScratch" in animal) {
    } else if(isCat(animal)) {
        console.log(animal.isScratch);
    }
}


