/**
 * 서로서 Union 타입
 * 교집합이 없는타입으로 만든 타입
 * 예시로는 string | number -> 서로소 관계, 서로소집합
 * 
 */

type Admin = {
    tag: "admin";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "member";
    name: string;
    point: number;
};
type Guest = {
    tag: "guest";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}번 추방하셨습니다.
// Member -> {name}님 현재까지 {point}포인트를 사용하셨습니다.
// Guest -> {name}님 현재까지 {visitCount}번 방문하셨습니다.
function login(user:User){
    // if("kickCount" in user){
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}번 추방하셨습니다.`);
    // } else if("point" in user){
    //     console.log(`${user.name}님 현재까지 ${user.point}포인트를 사용하셨습니다.`);
    // } else if("visitCount" in user){
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    // }
    if(user.tag === "admin"){
        console.log(`${user.name}님 현재까지 ${user.kickCount}번 추방하셨습니다.`);
    } else if(user.tag === "member"){
        console.log(`${user.name}님 현재까지 ${user.point}포인트를 사용하셨습니다.`);
    } else if(user.tag === "guest"){
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    }
}


/**
 * 예시
 * 비동기 작업의 결과를 처리하는 객체
 */

type loadingTask ={
    state : "loading";
}
type failedTask = {
    state : "failed";
    error : {
        message : string;
    };
}
type successTask = {
    state : "success";
    response : {
        data : string;
    };
}

type AsycTask2 = loadingTask | failedTask | successTask;

type AsycTask = {
    // 문자형 리터럴로 태그 정의
    state : "loading" | "failed" | "success";
    error? : {
        message : string;
    };
    response? : {
        data : string;
    };
};

const loading: AsycTask  = {
    state : "loading",
}

const failed : AsycTask = {
    state : "failed",
    error: {
        message: "에러가 발생했습니다.",
    }
}

const success : AsycTask = {
    state : "success",
    response : {
        data: "데이터가 성공적으로 로드되었습니다.",
    }
}

function handleTask(task: AsycTask) {
    if (task.state === "loading") {
        console.log("로딩 중...");
    } else if (task.state === "failed") {
        console.error(`에러 발생: ${task.error?.message}`);
    } else if (task.state === "success") {
        console.log(`성공: ${task.response?.data}`);
    }
}

function handleTask2(task: AsycTask2) {
    switch (task.state) {
        case "loading":
            console.log("로딩 중...");
            break;
        case "failed":
            console.error(`에러 발생: ${task.error.message}`);
            break;
        case "success":
            console.log(`성공: ${task.response.data}`);
            break;
    }
}