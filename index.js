var readlinesync = require('readline-sync');
var friendanswer = readlinesync.question("What is your name ?");

console.log("welcome " + " "+ friendanswer + " " + " To Do you know Abhishek");

function play(question,answer){
  var friendanswer = readlinesync.question(question);

  if (friendanswer === answer){
    console.log("you are right")
  }else{
    console.log("you are wrong")
  }
}

var question = [{
 question :"what is my full name ?",
 answer :"Abhishek",
},
{
  question :"where do i live",
  answer : "Muzaffarpur",
},
{
  question : "what is Abhishek fav game ?",
  answer : "cricket",
},
{
  question : "which degree i am persuing ?",
  answer : "Btech",
},
{
  question : "Do I have a Girlfriend",
  answer : "No",
}
];

for(var i=0; i<question.length; i++){
  var current = question[i];
  play(current.question,current.answer);
}
