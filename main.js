function getComputerChoice(rPS) {
let computerSelection = rPS[Math.floor(Math.random()*rPS.length)];
return computerSelection;
}


let result = getComputerChoice(['Rock', 'Paper', 'Scissors']);
console.log(result);