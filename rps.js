const options = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".btn")
const result = document.querySelector(".result")
const playCount = document.querySelector(".chance")
const score = document.querySelector(".point")
const computer = document.querySelector(".computer-result")
let play = true;
let count = 0;
let chance = 10;
let computerScore = 0;
playCount.innerText = chance;
score.innerText = count;

if (play){
  for(let button of buttons){
    button.addEventListener("click", function(e){
        const playerChoice = e.target.innerText;
        const computerChoice = options[Math.floor(Math.random() * options.length)];
        playRound(playerChoice, computerChoice)
        chance = chance - 1;
        console.log(chance)
        console.log(count)
        console.log(computerScore);
        playCount.innerText = chance;
        if (chance === 0){
          result.innerText = '';
          computer.innerText = '';
          displayResult(count, computerScore);
          const playAgainBtn = document.getElementById("final-btn")
          playAgainBtn.removeAttribute("hidden")
          const playBtn = document.querySelector('.player');
          const resultBtn = document.querySelector('.result-btn');
          playBtn.style.display = "none"
          resultBtn.style.display = "none"
        } 
    })
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.innerText = "Match Drawn";
    computer.innerText = `Computer Choice is: ${computerSelection}`;

  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    result.innerText = `you have won! ${playerSelection} beats ${computerSelection}`;
    computer.innerText = `Computer Choice is: ${computerSelection}`;
    count ++;
    score.innerText = count;
  }else {
    result.innerText = `you loose! ${computerSelection} beats ${playerSelection}`;
    computer.innerText = `Computer Choice is: ${computerSelection}`;
    computerScore ++;
  }
}


function displayResult(playerScor, computerScore){
  const finalResult = document.querySelector('.final-result');
  if (playerScor === computerScore){
    finalResult.innerText = `Match is Drawn Computer Score is: ${computerScore}`
  }else if (playerScor > computerScore){
    finalResult.innerText = `You'va won the game! Computer Score is: ${computerScore}`
  }else  {
    finalResult.innerText = `Your Score is: ${playerScor}. You'va loose the game! Better Luck Next Time.`
  }
}
function resetBtn(){
  window.location.reload()
}




