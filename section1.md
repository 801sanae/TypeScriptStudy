# TypeScript 공부




1. 패키지 생성후 init
```js
npm init

## 기본값으로 프로젝트 생성
npm init -y
```

2. typenode 패키지 설치필요
```js
npm i @types/node
```

3. 타입스크립트 컴파일러 설치
ts -> js
```js
// gloabl 버전으로 설치하여 desktop에서 사용

sudo npm install typescript -g

```

4. 설치여부 확인
```js
tsc -v
```

5. 컴파일 및 실행
```bash
# compile
tsc index.ts
ls -al |grep "index.*"
-rw-r--r--@  1 kmy  staff   142 May 10 17:56 index.js
-rw-r--r--@  1 kmy  staff   141 Apr 13 11:22 index.ts
# execute
node index.js
Hello, world!


# compile & execute -> "ts-node"
npm install  -g ts-node
```

5.1 ts-node -> tsx
```bash
sudo npm i -g tsx
```
> TSX 사용을 권장합니다 (Node.js 20 버전에서는 동작하지 않습니다)
23년 10월 Node.js의 LTS(장기 지원 버전)가 20대로 업데이트 되면서 ts-node가 정상적으로 동작하지 않고 있습니다. 따라서 23년 10월 이후에 ts-node 대신 tsx를 사용
