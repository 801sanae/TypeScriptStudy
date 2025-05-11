//any
// 특정 변수 타입 모를때 
// runtime때 확인됨.
// 미사용 지향
// let anyVar = 10;
// anyVar = 'hello';
let num = 10;
let anytype;
anytype = 10;
anytype = 'hello';
anytype = true;
anytype = {};
anytype = [1, 2, 3];
anytype = null;
anytype = undefined;
anytype = () => { };
anytype = Symbol('symbol');
anytype = new Date();
anytype = new Map();
anytype = new Set();
anytype = new WeakMap();
anytype = new WeakSet();
anytype = new ArrayBuffer(10);
anytype.toUpperCase(); // anytype이 string으로 추론됨
anytype.toFixed(); // anytype이 number으로 추론됨
//unKnown
//
let unKnowntype;
unKnowntype = 10;
unKnowntype = 'hello';
unKnowntype = true;
unKnowntype = {};
unKnowntype = [1, 2, 3];
unKnowntype = null;
unKnowntype = undefined;
unKnowntype = () => { };
unKnowntype = Symbol('symbol');
unKnowntype = new Date();
unKnowntype = new Map();
unKnowntype = new Set();
// num = unKnowntype; // unknown은 number로 추론되지 않음
// unknowntype.toUpperCase(); // unknown은 string으로 추론되지 않음
// unknowntype.toFixed(); // unknown은 number으로 추론되지 않음
typeof unKnowntype === 'string' && unKnowntype.toUpperCase(); // unknown은 string으로 추론됨
typeof unKnowntype === 'number' && unKnowntype.toFixed(); // unknown은 number으로 추론됨
export {};
// type 정제 
