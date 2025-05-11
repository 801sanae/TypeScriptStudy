// enum 타입
// 여러가지 값들을 각각 이름을 부여하여 열거해놓고 사용하는 타입
var Role;
(function (Role) {
    // ADMIN = 0,
    // USER = 1,
    // GUUEST = 2
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUUEST"] = 2] = "GUUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "kim",
    // role : 0 // 0: "admin", 1: "user", 2: "guest"
    role: Role.ADMIN, // 0: "admin", 1: "user", 2: "guest"
    language: Language.KOREAN // "ko": "Korean", "en": "English"
};
const user2 = {
    name: "kim2",
    // role : 1
    role: Role.USER // 0: "admin", 1: "user", 2: "guest"
};
const user3 = {
    name: "kim3",
    // role : 2
    role: Role.GUUEST // 0: "admin", 1: "user", 2: "guest"
};
console.log(user1, user2, user3);
export {};
