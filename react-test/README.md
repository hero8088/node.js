## Back-End : node.js/Express,  Front-End : React
   개발 방향 : react에서 Back-End쪽 데이터를 받아서 Render() 해준다.

## react project생성
1. npm install -g create-react-app
2. create-react-app 프로젝트 폴더명
3. npm start 명령으로 실행해서 3000번 포트로 기본페이지가 정상적으로 뜨면 설치 완료

## termux에서 서버 두개를 실행 시키는 법(react와 node 실행) 
<h3>npm start & node ../index</h3>
& : 하나를 백그라운드로 실행하고 나머지를 실행</br>
&& : 하나가 정상적으로 실행 되고 난 후 다음 명령 실행 (서버실행명령은 제어권이 넘어가는지 다음명령이 실행되지 않았다)</br>
; : 성공여부 관계없이 실행 (이것도 제어권이 넘어가는지 다음 명령이 실행되지 않았음)</br>
console확인을 위해서는 termux를 두개를 띄울 방법을 찾아야 함.
