

function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3 +1)
    let choice;
    if (randomNumber === 1){
        choice = "rock"
    }
    else if (randomNumber === 2){
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase()
    console.log(playerChoice)
    console.log(computerSelection)
    if (playerChoice === "rock"){
        if (computerSelection === "scissors"){
            console.log("You win! Rock beats scissors")
            return 1
        }
        else if (computerSelection === "paper"){
            console.log("You lose! Paper beats rock")
            return 2
        }
        else {
                console.log("Draw!")
                return 0
            }
        }
    else if (playerChoice === "paper"){
        if (computerSelection === "rock"){
            console.log("You win! Paper beats rock")
            return 1 
        }
        else if (computerSelection === "scissors"){
            console.log("You lose! Scissors beats paper")
            return 2
        }
        else {
            console.log("Draw!")
            return 0
        }
    }
    else {
        if (playerChoice === "scissors"){
            if (computerSelection === "paper"){
                console.log("You win! Scissors beat paper")
                return 1
            }
            else if (computerSelection === "rock"){
                console.log("You lose! Rock beats scissors")
                return 2
            }
            else {
                console.log("Draw!")
                return 0
            }
        }
    }
}
const playerChoice = prompt("Choose Rock, paper or scissors")
const computerSelection = getComputerChoice()


console.log(playRound(playerChoice, computerSelection))

function playGame(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++){
        if (playRound === 1){
            playerPoints++
        }
        else if (playRound === 2){
            computerPoints++
        }
    }
    console.log(playerPoints)
    console.log(computerPoints)
    if (playerPoints > computerPoints){
        return "You win the game!"
    }
    else {
        return "You lose the game!"
    }
}

console.log(playGame())