# MVC삽질이력 

1. 기본 생각은 이랬다</br>
    Controller.js  ->  Service.js -> Dao.js(Postgresql)
2. 문제의 발단.</br>
   pg-promsie는 Promise객체를 반환한다.
   이게 뭐냐면 Dao에서 호출하는 any함수가 비동기 함수란 뜻이다.
   promise에 대해 느낌만 가지고 있던 나로서는 저 3파일의 연동을 어떻게 해줘야 할 지 막막했다.
3. 삽질시작</br>
   Dao.js 단독 실행시 값을 잘 리턴하는걸 확인
   Service와 Controller에서 찍은 Console.log가 예상과 틀려서 2일 삽질
   <h1><pre>console에 Promise { pending } 라고 뜨는거 에러 아니다!!! T T</pre></h1>
   내가 아무래도 무지한 상태에서는 이도 저도 안되겠다 싶어 Promise부터 구글링 함.
  
4. 비동기 Asynchronous : 코드를 실행 할 때 기다리지 않고 다음코드를 실행한다.</br>
                         성능상으로는 도움이 될지 모르겠는데 코드를 짤 때 많이 햇갈린다.</br>
   비동기 프로그램의 발전이력
   1. callback function : 비동기 처리 로직의 리턴값을 받기위해 사용하는데 유명한 말로 콜백지옥 이라는 말이 있다.
        https://www.w3schools.com/js/js_callback.asp
   2. Promise : 얜 Promise 객체에 함수를 넣어서 실행 하는건데 결과값을 .then().catch()로 받을 수 있다.
        https://www.w3schools.com/js/js_promise.asp
   3. Async/Await : async를 함수의 앞부분에 써주면 이 함수는 비동기처리되는 함수다 라는 뜻이다.
                    async로 선언된 함수 안에 호출되는 함수(메서드) 앞에 await을 써주면 이함수가 끝날 때까지 기다려라 라는 뜻이다.
                    <h2>여기서 주의해야 하는게 나 같이 여러단계의 호출이 있는 경우 이개념이 졸라 헷갈린다는 거다.</h2>
                    
 5. 해결의 실마리 </br>
    한번에 3개의 파일을 모두 해결하는 것은 주제넘은 짓이라는걸 파악하고 Service.js -> Dao.js의 관계를 정리함.
    하지만 controller.js가 붙으면서 Service의 리턴값을 못받는 현상 발생
    
 6. 최종해결</br>
    Sevice.js에서 Return 하는 위치를 then or catch에 넣으면 안되고
    변수를 선언하고 then or catch에 치환하는 문장을 넣고 함수의 제일 마지막 부분에 변수를 리턴하면 된다..
    이부분은 사실 함수의 스코프에 관련된 문제인거 같은데 머리가 깨질거 같아서 여기까지만 정리...
