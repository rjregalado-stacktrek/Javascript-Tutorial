document.addEventListener('DOMContentLoaded', function() {
  var magic8Ball = {};
  magic8Ball.listofanswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "My name is John."
  ];

  magic8Ball.getAnswer = function(question) {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];

    var ballImage = document.getElementById("8ball");
    ballImage.classList.add("shake");

    var answerText = document.getElementById("answer");
    answerText.textContent = answer;
    answerText.style.display = "block";
    
    ballImage.setAttribute("src", "/assests/answer.png");

    //console.log(question);
    //console.log(answer);
  };
  
  var answerText = document.getElementById("answer");
  answerText.style.display = "none";

  var onClick = function() {
    answerText.style.display = "none";
    var ballImage = document.getElementById("8ball");
    ballImage.setAttribute("src", "/assests/8.png");
    var question = prompt("What do you want to know?");
    magic8Ball.getAnswer(question);
  };
  
  var questionButton = document.getElementById("questionButton");
  questionButton.addEventListener("click", onClick);
});
