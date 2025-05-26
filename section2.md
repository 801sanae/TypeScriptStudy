# TypeScript 공부


## tsconfig.json

TS <-- --> JS <br>

프로젝트 성격, 버전 등에 따라 컴파일러 옵션을 설정한다. <br>

```bash
tsc --init
# 이미 있는 경우 
error TS5054: A 'tsconfig.json' file is already defined at: '/Users/kmy/Documents/ts-study/section2/tsconfig.json'.
# 없는 경우
Created a new tsconfig.json with:
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```

<br>  

### include

```json
{
    "include" : ["src"]
}
```
> 컴파일 경로 지정

<br>

### target

```json
{
    "compilerOptions" : {
        // "target": "ES5"
        "target" : "ESNext" // JS 최신버전
    }
}
```
> target으로 compile target 버전 지정 가능

> TS에서 작성한 코드 문법이 target 버전에 맞게 JS로 convert된다. 

### module

```json
{
    "compilerOptions" : {
        // "module" : "CommonJS" // JS 변환될때 CommonJS 모듈시스템으로 변환됨.
        "module" : "ESNext" // ES 모듈시스템
    }
}
```
> CommonJS, ESNext 해당 명명에 맞는 모듈시스템으로 JS 변환됨.<br>
>   "type": "module" <- package.json 수정필요

### outDir

```json
{
    "compilerOptions" : {
        "outDir" : "dist"
    }
}
```
> 빌드된 컴파일 결과가 특정경로에 젖아된다.

### strict

```json
{
    "compilerOptions" : {
        "strict" : true
    }
}
```
> 타입검사에 대한 정도 엄격한 검사 정도
> JS -> TS 일 경우 strict를 false 하는 케이스가 있다.

### moduleDectection



모든 타입스크립트파일을 전역 모듈로 본다.
변수가 동일한 경우 에러가  발생

- 해결방법
1. 모듈시스템의 코드(export, import)를 사용하게 되면 독립 모듈, 격리된 공간으로 판단한다.
2. tsconfig.json에 moduleDectection을 false로 수정한다.
2-1. ( command + shift - p ) -> TypeScript : Restart TS Server 

```json
{
    "compilerOptions" : {
        "moduleDetection: "force"
    }
}

### ts-node/esm


```json
{
    "compilerOptions" : {
        ...
        ...
        ...
    },
    "ts-node" : {
        "esm" : true
    }
}
```