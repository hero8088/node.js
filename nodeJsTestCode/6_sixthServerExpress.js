/**
 * express test
		res.download()	파일이 다운로드되도록 프롬프트합니다.
		res.end()	응답 프로세스를 종료합니다.
		res.json()	JSON 응답을 전송합니다.
		res.jsonp()	JSONP 지원을 통해 JSON 응답을 전송합니다.
		res.redirect()	요청의 경로를 재지정합니다.
		res.render()	보기 템플리트를 렌더링합니다.
		res.send()	다양한 유형의 응답을 전송합니다.
		res.render	파일을 옥텟 스트림의 형태로 전송합니다.
		res.sendStatus()	응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다.
 */

const express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.write('<h1>react page list</h1>');
	res.write('<hr/>');
	res.write('<ul>');
	res.write('<li><a href="/about">basic html file</a> : node.js file output</li>');
	res.write('<li><a href="/react1">1. Shopping List</a> : basic render </li>');
	res.write('<li><a href="/react2">2. Class Inherit</a> : jquery output after class inherit </li>');
	res.write('<li><a href="/react3">3. Variable Set</a> : variable setting </li>');
	res.write('<li><a href="/react4">4. Color Change Use this</a> : color change action bind "this" in button Object  </li>');
	res.write('<li><a href="/react5">5. Clock </a> : React Life Cycle </li>');
	res.write('<li><a href="/react6">6. Input Form </a> : React Life Cycle & Form Control & Events </li>');
	res.write('</ul>');
	res.end();
});

app.get('/about', function(req, res) {
	res.render('/html/about.html');
	res.end();
});

app.get('/react1', function(req, res) {
	res.render('/ReactHtml/1_List.html');
	res.end();
});

app.get('/react2', function(req, res) {
	res.render('/ReactHtml/2_ClassInherit.html');
	res.end();
});

app.get('/react3', function(req, res) {
	res.render('/ReactHtml/3_VariableSet.html');
	res.end();
});

app.get('/react4', function(req, res) {
	res.render('/ReactHtml/4_This_ColorChange');
	res.end();
});

app.get('/react5', function(req, res) {
	res.render('/ReactHtml/5_Lifecycle_Clock.html');
	res.end();
});

app.get('/react6', function(req, res) {
	res.render('/ReactHtml/6_Form_Event_Lifecycle_Clock.html');
	res.end();
});

app.listen(3000, () => {
	console.log("Start Node Js Server in Port 3000");
});
