

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

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice === "rock"){
        if (computerSelection === "scissors"){
            return "You win! Rock beats scissors"
        }
        else if (computerSelection === "paper"){
            return "You lose! Paper beats rock"
        }
        else {
                return "Draw!"
            }
        }
    else if (playerChoice === "paper"){
        if (computerSelection === "rock"){
            return "You win! Paper beats rock"
        }
        else if (computerSelection === "scissors"){
            return "You lose! Scissors beats paper"
        }
        else {
            return "Draw!"
        }
    }
    else {
        if (playerChoice === "scissors"){
            if (computerSelection === "paper"){
                return "You win! Scissors beat paper"
            }
            else if (computerSelection === "rock"){
                return "You lose! Rock beats scissors"
            }
            else {
                return "Draw!"
            }
        }
    }
}

console.log(playRound())
