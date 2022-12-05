var readLineSync = require('readline-sync');
var score= 0;
var name = readLineSync.question("What is you name? ");
console.log("--------------"); 
console.log("Welcome " + name +" to this Amazing QuiZ Game !! ");
console.log("--------------"); 
var highScore =[  
  {
    name: 'Shikha',
    score: 10,
  },
  {
    name: 'Mukul',
    score: 9,
  },
  {
    name: 'Abhinav',
    score: 7,
  },
  
]
var questions = [
  {
    question: "What is my name? ",
    answer: "Shikha",
  },
  {
    question: "What is my nickname? ",
    answer: "nanhi",
  },
  {
    question: "Is my age greater than 25? ",
    answer: "no",
  },
  {
    question: "Is my hometown Patna? ",
    answer: "yes",
  },
  {
    question: "what is my favourite colour? ",
    answer: "black",
  },
  {
    question: "what is my favourite food? ",
    answer: "noodles",
  },
  {
    question: "what is my favourite number? ",
    answer: "7",
  },
  {
    question: "Who is my favorite superhero? ",
    answer: "ironman",
  },
  {
    question: "Which is my favorite sad song? ",
    answer: "judai",
  },
  {
    question: "what is my birth year? ",
    answer: "1997",
  },
  {
    question: "what is my birth date? ",
    answer: "27",
  }
];
function play(question,answer)
  {
    var userAnswer=readLineSync.question(question);
    console.log("User entered .."+userAnswer);
    console.log('\n');
    if(userAnswer === answer)
    {
      score=score+1;
      console.log("you are right! your current score is: "+score);
      console.log("--------------");
    }
    else{
      console.log("you are wrong! your current score is: "+score);
      console.log("--------------");
    }
  }
console.log("--------------");
for(var i=0; i<questions.length; i++)
  {
    if(i===questions.length/2)
    {
      console.log("You are upgraded to level 2.... Congratulations!!! ");
    }
    var quest=questions[i];
    play(quest.question, quest.answer);
  }
console.log("--------------");
console.log("your final score: "+score);
console.log("--------------");

var userQuery = readLineSync.question("do you want to know the high scores? (y/n) ");
var count = 0;
if(userQuery === "y")
{

  for(var j = 0 ; j < highScore.length ; j++)
  {
      
         var currentHighScore = highScore[j];
         console.log(currentHighScore.name + ":" + currentHighScore.score);
       
       if(score > currentHighScore.score)
       {
         count = count+1;
     
       }
  }
  console.log("--------------");
  if(count===3)
  {
     console.log("congratulations ! you are the high scorer, send me the screenshot");
  } 
}