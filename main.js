function getComputerChoice() {
    let rPS = ['Rock', 'Paper', 'Scissors'];
    let res = rPS[Math.floor(Math.random()*rPS.length)];
    return res;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Write here');
    let input = playerSelection.toLowerCase();
    let output = '';

    if(input == 'rock') {
        switch(computerSelection) {
            case 'Rock':
                output += "It's a tie!";
                break;
                case 'Paper':
                    output += 'You lose! Paper beats Rock';
                    break;
                    case 'Scissors':
                output += 'You win! Rock beats Scissors';
            }
        }

    if(input == 'paper') {
        switch(computerSelection) {
            case 'Rock':
                output += "You win! Paper beats Rock";
                break;
            case 'Paper':
                output += "It's a tie!";
                break;
            case 'Scissors':
                output += 'You lose! Scissors beats Paper';
            }
        }

    if(input == 'scissors') {
        switch(computerSelection) {
            case 'Rock':
                output += "You lose! Rock beats Scissors";
                break;
            case 'Paper':
                output += 'You win! Scissors beats Paper';
                break;
            case 'Scissors':
                output += "It's a tie!";
            }
        }

        return output;
}

function game() {
    let compScore = 0;
    let playerScore = 0;
    let playedRounds = 0;

    for(let i = 0; playedRounds < 4; i++){
        let round = playRound(null, getComputerChoice());
        console.log(round);
        if(round.includes('win') == true) {
            playerScore += 1;
            playedRounds += 1;
            if(playerScore == 3) break;
        }
        if(round.includes('lose') == true) {
            compScore += 1;
            playedRounds += 1;
            if(playerScore == 3) break;
        }
    }

    if(playerScore > compScore){
        console.log("YOU WIN THE GAME");
    }
    if(compScore > playerScore){
        console.log('LOOOOOOOSER');
    }
}

game();


