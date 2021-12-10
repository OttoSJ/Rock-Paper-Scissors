const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll("button")
let userChoice
let results

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click",  (e) => {
   userChoice = e.target.id 
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1 ) {
        computerChoice = "rock"
        
    }
    if (randomNumber === 2 ) {
        computerChoice = "scissors"

    }
    if (randomNumber === 3 ) {
        computerChoice = "paper"

    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults() {
    if (computerChoice === userChoice) {
    results = "It's a draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
    results = "You win!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
    results = "You lost!"
    }
   
    if (computerChoice === "paper" && userChoice === "scissors") {
    results = "You win"
    }
   
    if (computerChoice === "paper" && userChoice === "rock") {
    results = "You lose!"
    }
   
    if (computerChoice === "scissors" && userChoice === "rock") {
    results = "You win!"
    }
   
    if (computerChoice === "scissors" && userChoice === "paper") {
    results = "You lose!"
    }
   
resultsDisplay.innerHTML = results
}