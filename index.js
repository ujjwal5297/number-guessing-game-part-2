let btn = document.getElementById("btn");
let button = document.getElementById("btn_hint");
let output = document.getElementById("outputtext");
let button3 = document.getElementById("btn_reset");

var Attempts = 3;

let number = [Math.ceil(Math.random()*10)];
// let number = 4;
console.log(number);

var seconds = 60;
function tick() {
  var counter = document.getElementById("counter");
  seconds--;
  counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
  if (seconds > 0) {
    setTimeout(tick, 1000);
  } else {
    document.getElementById("btn").disabled = true;
    document.getElementById("timeLeft").innerHTML =
      "OOPS ! You ran out of time ! :(";
    document.getElementById(
      "correctAnswer"
    ).innerHTML = `The correct guess was : ${number}`;
  }
}
tick();

attemptID = document.getElementById("Attempts");
attemptID.innerHTML = `Attempts left : ${Attempts}`;

let attempts = 0;

btn.addEventListener("click", function() {
    let input = document.getElementById("userInput").value;
  if (input == number) {
    output.innerHTML = `You guessed right number, your number was ${number}, you guess the right answer in ${
      attempts + 1
    } attempts`;
    document.body.style.backgroundColor = "green";
  } else if (input != number) {
    attempts++;
    output.innerHTML = "You guessed wrong number";
    document.body.style.backgroundColor = "red";

    Attempts = Attempts - 1;
    console.log("Attempts left : " + Attempts);

    attemptID.innerHTML = `Attempts left : ${Attempts}`;

    if (Attempts == 0) {
      document.getElementById("btn").disabled = true;
      NoAttemptsLeftId = document.getElementById("NoAttemptsLeft");
      NoAttemptsLeftId.innerHTML = `Oops! you ran out of attempts or time, the correct number was ${number}`;
    }
  }
});

button.addEventListener("click", function() {
    let input = document.getElementById("userInput").value;
  if (number > input) {
    output.innerHTML = "You guessed a smaller number";
  }
   else if (number < input) {
    output.innerHTML = "You guessed a greater number";
  }
});

button3.addEventListener("click", function() {
  attempts = 0;
  output.innerHTML ="Enter a number below";
  number = [Math.floor(Math.random()*10)];
  console.log(number);
  Attempts = 3;
  seconds = 60;
  document.getElementById("btn").disabled = false;
  attemptID.innerHTML = `Attempts left : ${Attempts}`;
  // document.getElementById("userInput").value.reset();
  console.log('reset button is clicked');
  document.body.style.backgroundColor = '#333232';
  var getValue= document.getElementById("userInput");
        if (getValue.value !="") {
            getValue.value = "";
        }
});
