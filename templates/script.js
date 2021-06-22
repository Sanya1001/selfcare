//const event= '21 Aug 2021';
//const daysEl = document.getElementById('days');
//const hoursEl = document.getElementById('hours');
//const minutesEl = document.getElementById('minutes');
//const secondsEl = document.getElementById('seconds');
//
//function countdown(){
//const eventDate = new Date(event);
//const currentDate = new Date();
//
//const totalSec = (eventDate-currentDate)/1000;
//
//const days = Math.floor(totalSec/3600/24);
//const hours = Math.floor(totalSec/3600) % 24;
//const minutes = Math.floor(totalSec/60) % 60;
//const seconds = Math.floor(totalSec) % 60;
//
//daysEl.innerHTML = formatTime(days);
//hoursEl.innerHTML = formatTime(hours);
//minutesEl.innerHTML = formatTime(minutes);
//secondsEl.innerHTML = formatTime(seconds);
//
//}
//
//function formatTime(time){
//return time<10? (`0${time}`): time;
//}
//
//countdown();
//setInterval(countdown, 1000);
//COUNTDOWN TIMER

//Purple heart rain
//function createHeart(){
//const heart = document.createElement('div');
//heart.classList.add('heart');
//heart.innerText = '💜';
//heart.style.left = Math.random()*100 + "vw";
//heart.style.animationDuration = Math.random()*2 + 3+ "s";
//document.body.appendChild(heart);
//
//setTimeOut(() => {
//heart.remove();
//}, 5000);
//}
//
//setInterval(createHeart, 1000);

//Check-in
//{
//question:
//a:
//b:
//c:
//},
//const quizData = [
//{
//question:'How was your day?',
//a:'Great!',
//b:'Okay-ish...',
//c:'Bad :('
//},
//{
//question:'Did you work out?',
//a:'Yes',
//b:'A bit',
//c:'No'
//},
//{
//question:'Did you study as much as you thought you would?',
//a:'Yes',
//b:'Partially',
//c:'No'
//},
//{
//question:'Did you drink enough water?',
//a:'Yes',
//b:'A bit',
//c:'No'
//},
//{
//question:'Did you socialize?',
//a:'Yes',
//b:'Kind of',
//c:'No'
//},
//{
//question:'Did your day stress you out?',
//a:'No',
//b:'A bit',
//c:'Yes'
//},
//{
//question:'Did you take a break?',
//a:'Yes',
//b:'A bit',
//c:'No'
//},
//{
//question:'Did you do something that made you happy?',
//a:'Yes!',
//b:'Kind of',
//c:'No'
//}
//];
//
//let currentQuestion = 0;
//let score = 0;
//let answer = undefined;
//
//const questionEl = document.getElementById('question');
//const aEl = document.getElementById('a');
//const bEl = document.getElementById('b');
//const cEl = document.getElementById('c');
//const submitBtn = document.getElementById('btn');
//const answerEls = document.querySelectorAll('.answer');
//
//loadQuiz();
//
//function loadQuiz(){
//deselectAnswer();
//const currentQuizData = quizData[currentQuestion];
//questionEl.innerHTML = currentQuizData.question;
//aEl.innerHTML = currentQuizData.a;
//bEl.innerHTML = currentQuizData.b;
//cEl.innerHTML = currentQuizData.c;
//currentQuestion++;
//}
//
//function deselectAnswer(){
//answerEls.forEach((answerEl) =>{
//answerEl.checked= false;
//});
//}
//
//function getSelected(){
//answerEls.forEach((answerEl) =>{
//if(answerEl.checked){
// answer = answerEl.id;
// }});
//}
//
//submitBtn.addEventListener('click', ()=>{
//const answer = getSelected();
//if(answer){
//if(answer === 'a'){
//score= score+3;
//}
//if(answer === 'b'){
//score= score+2;
//}
//if(answer === 'c'){
//score= score+1;
//}
//if(currentQuestion < quizData.length){
//loadQuiz();
//}}})

//Todo
const form= document.getElementById('form');
const input = document.getElementById('input');
const todoEls = document.querySelectorAll('todos');

//const todos = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', (e) =>{
e.preventDefault();
addTodo(e);
});

function addTodo(todoText){
let todo= input.value;
if(todoText){
todo= todoText.text;
}
if(todo){
const todoEl = document.createElement('li');
todoEl.innerTxt = todo;
todoEls.appendChild(todoEl);
input.value='';
}
}