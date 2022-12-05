var readLineSync = require('readline-sync');
var score= 0;
console.log("Shikha Kumari");
console.log("--------------");
var name = readLineSync.question("What is you name? ");
console.log(name);
console.log("--------------");
console.log("Welcome " + name +" to this Amazing game !! ");
console.log("--------------"); 
// var name1 = readLineSync.question("May I know you name? ");
// console.log("Welcome "+name);
// console.log("--------------"); 
var Question1= readLineSync.question("Is my age greater than 25? ");
var Answer1="no";
if(Question1 === Answer1){
  console.log("You are right! ");
}
else{
  console.log("You are wrong! ");
}
console.log("--------------");
var Question2 = readLineSync.question("Is my hometown Patna? ");
var Answer2="yes";
if(Question2 === Answer2){
  console.log("you are right! ");
  score=score+1;
  console.log("your score is: "+ score);
}
else{
  console.log("you are wrong! ");
  score=score-1;
  console.log("your score is: "+ score);
}
console.log("--------------");
function add(num1,num2){
  var sum=num1+num2;
  return sum;

}
var result = add(2,3);
console.log("sum of 2 and 3 is: "+ result);
console.log("--------------");

function check(quest,ans){
  var userAnswer = readLineSync.question(quest);
  if(userAnswer==ans){
    console.log("you are right! ");
    score=score+1;
  }
  else{
    console.log("you are wrong! ");
    score=score-1;
  }
}
check("what is my favourite colour? ","black");
check("what is my favourite food? ","noodles");
console.log("your current score is: "+score);
console.log("--------------");

for(var i=0;i<5;i++)
  {
    console.log("Shikha"+i);
  }
console.log("--------------");
-------------------Homework-------------------------------------
var s = "";
for(var i = 1; i <= 5; i++)
  {
    for(var j = 0; j < i; j++){
      s += "*";
    }
    s += "\n";
  }
console.log(s);
console.log("--------------");
var s = "";
for(var i = 1; i <= 5; i++)
  {
    for(var j = 0; j <= 5-i; j++){
      s += "*";
    }
    s += "\n";
  }
console.log(s);
console.log("--------------");
var groceryItem = ["sugar","milk","bread","butter","salt"];
console.log(groceryItem[0]);
console.log(groceryItem[2]);
console.log(groceryItem[groceryItem.length-1]);
console.log("--------------");
for(var i=0;i<groceryItem.length;i++){
  console.log(groceryItem[i]);
}
console.log("--------------");
var superheros=[ironman={
  name: "ironman",
  power: "technology",
  costumeColor: "Red",
  strength: 500,
  stealth: 1000,
},
hulk={
  name: "hulk",
  power: "fight",
  costumeColor: "green",
  strength: 1000,
  stealth: 500,
}];
console.log(ironman.stealth);
console.log(ironman.strength);
if(ironman.strength>hulk.strength)
{
  console.log("you are right! ");
}
else{
  console.log("you are wrong! ");
}
questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Dhruv",
}
questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "Channa Meraya",
}

var userAnswer=readLineSync.question(questionOne.question);
if(userAnswer === questionOne.answer)
{
  score = score+1;
  console.log("you are right! your current score is: "+score);
}else
{
  score = score-1;
  console.log("you are wrong! your current score is: "+score);
}
