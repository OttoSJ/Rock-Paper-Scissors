const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultsDisplay = document.createElement('h1')
const gameGrid = document.getElementById("game")
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultsDisplay)


const choices = ["rock", "paper", "scissors"]
let userChoice
let computerChoice


const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = "User Choice: " + userChoice
    generateComputerChoice()
    getResults()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random () * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = "Computer Choice: " + computerChoice

}


for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button")
    button.id = choices[i]  
    button.innerHTML = choices[i]
    button.addEventListener("click", handleClick)
    gameGrid.appendChild(button)
}


const getResults = () => {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultsDisplay.innerHTML = "YOU WIN!"
            break
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultsDisplay.innerHTML = "YOU LOOSE!"
            break
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            resultsDisplay.innerHTML = "YOU LOOSE!"
            break

    }        
}





