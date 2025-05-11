// void
// 리턴이 없다.?

function logMessage(message: string): void {
  console.log(message);
}

function logError(error: string): void {
  console.error(error);
}
function logWarning(warning: string): string {
 {return warning;}
}
function logInfo(info: string): undefined {
  console.info(info);
}

function logDebug(debug: string): null {
    return null;
}




let a : void = undefined; // undefined

// a = null; // null은 가능 strictNullChecks": false, 하면 가능
a = undefined; // undefined은 가능

// a = 1; // error
// a = 'hello'; // error
// a = true; // error
// a = {}; // error
// a = []; // error


// never
// 절대 발생하지 않는 타입


function infiniteLoop(): never {
    while (true) {
        // 무한 루프
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

let c : any;

let b : never;
// b = undefined; // error
// b = null; // error
// b = 1; // error
// b = 'hello'; // error
// b = true; // error
// b = {}; // error
// b = []; // error

b = c; // any도 never 타입 변수에 대입 불가능


