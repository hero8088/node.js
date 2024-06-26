# npm을 최신 버전으로 업데이트 하기 : npm install -g npm@latest


# node.js
node.js route without express

**실습환경 제공(7일만 무료)**
https://codeanywhere.com/editor/

# express api
https://expressjs.com/ko/guide/routing.html

# 스마트폰으로 서버 만들어보기 (DEX를 지원하는 폰으로 하는 것이 정신건강에 이롭다.)
https://royalturtles.tistory.com/5<br/>
<h4>Play Store에서 설치한 것</h4>
  1.Termux : ubuntu기반 환경을 제공<br/>
  2.SQL Client : command방식의 psql보다 UI방식으로 편리해서 사용<br/>
  3.Spck Editor : vim 대체 [github을 연결해 수정 내용을 반영(push)하고 다시 termux로 가서 소스를 내려(pull)받는다.]<br/>
  4.GitHub : Repository주소 복사용
<h4>Apt로 설치한 것</h4>
  1.coreutils <br/>
  2.vim : Editor<br/>
  3.node.js <br/>
  4.postgresql - DB SERVER 
<h4>npm으로 설치한 것</h4>
  1.Express<br/>
  2.pg : postgresql을 node.js상의 객체로 사용<br/>
  3.pg-promise : pg보다 사용이 편하고 동기 처리가 가능
  4.body-parser : json

# 실행환경셋팅
1. git clone 저장소주소 디렉토리명
2. 디렉토리에서 npm init을 통해 package.json 생성

# git 명령어 
1. 원격저장소에서 땡기기 : git clone 저장소주소 저장할폴더명
https://medium.com/@joongwon/git-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC-c25b421ecdbd
2. CRUD한 로컬내역을 반영 : git add .
3. 반영한 내용을 commit : git commit -m "메세지"
4. github에 올리기 : git push 저장소주소
5. github에서 변경사항 받아오기 : git pull 저장소주소

# Ubuntu apt와 Centos yum
https://www.lesstif.com/lpt/ubuntu-apt-apt-get-redhat-centos-yum-89555903.html

# postgresql 설치 및 구동
**설치과정 : install까지만 참고하고 이후는 아래 링크 참고 할 것<br/>
https://dejavuqa.tistory.com/16<br/>
**설치이후<br/>
https://wiki.termux.com/wiki/Postgresql<br/>

Create skeleton database
 mkdir -p $PREFIX/var/lib/postgresql
 initdb $PREFIX/var/lib/postgresql

Starting the database
 pg_ctl -D $PREFIX/var/lib/postgresql start

Similarly stop the database using
 pg_ctl -D $PREFIX/var/lib/postgresql stop

Create User
 $ createuser --superuser --pwprompt yourUserName

Create your database:
 $ createdb mydb

Open your database
 $ psql mydb

You will now see the promt
 mydb=#

# postgressql 명령
pg_class : DB안에 객체정보를 가지고 있다.
relkind컬럼에서 아래와 같이 정의하고 있다.
r = ordinary table, 
i = index, 
S = sequence, 
v = view, 
c = composite type, 
t = TOAST table.

# 모바일환경에서 DEBUG
https://medium.com/@rabter/%EB%AA%A8%EB%B0%94%EC%9D%BC-%ED%81%AC%EB%A1%AC-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C-%EB%94%94%EB%B2%84%EA%B9%85%ED%95%98%EA%B8%B0-f56a12a68538

