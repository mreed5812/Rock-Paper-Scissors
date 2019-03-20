//Global Variables
let gamePlaying,
	gameResult,
	roundNumber,
	roundResult,
	computerScore,
	playerScore;

let pScore = document.getElementById("player-score"),
	cScore = document.getElementById("computer-score");

initialize();

document.getElementById("newGame").addEventListener('click', initialize);

document.querySelectorAll(".selection").forEach((button) => {
	button.addEventListener('click', () => {
		if(gamePlaying){
			roundNumber++;
			
			let playerSelection = button.id;
			let computerSelection = computerPlay();
			roundResult = playerSelection + " vs " + computerSelection;
			gameResult = playRound(playerSelection, computerSelection);
			document.getElementById("roundResult").innerHTML = roundResult;
			scoreTracker(gameResult);
			
			if(roundNumber == 5){
				determineWinner(computerScore, playerScore);
				gamePlaying = false;
			}
		}
	});
});

//setup the game - set scores to 0 
function initialize(){
	document.getElementById("player-score").innerHTML = "Player Score: 0";
	document.getElementById("computer-score").innerHTML = "Computer Score: 0";
	document.getElementById("roundResult").innerHTML = " Player vs Computer";
	playerScore = 0;
	computerScore = 0;
	roundNumber = 0;
	gamePlaying = true; 
}

//generate random number for computer selection
function getRandomNum() {
    return Math.floor(Math.random() * 3);
}

//computer select option, at random, from array of choices
function computerPlay(){
	let options = ['rock', 'paper', 'scissors'];
        return options[getRandomNum()];
}

function playRound(playerSelection, computerSelection){
			
	if(playerSelection == "rock"){
		if(computerSelection == "paper"){
			return "computerWin";
		} else if(computerSelection == "scissors"){
			return "userWin";
		} else{
			return "Tie";
		}
	}
	if(playerSelection == "paper"){
		if(computerSelection == "rock"){
				return "userWin";
		} else if(computerSelection == "scissors"){
			return "computerWin";
		} else{
			return "Tie";
		}
	}		
	if(playerSelection == "scissors"){
		if(computerSelection == "paper"){
			return "userWin";
		} else if(computerSelection == "rock"){
			return "computerWin";
		} else{
			return "Tie";
		}
	}
}

function determineWinner(computerScore, playerScore){
	if(computerScore == playerScore){
		document.getElementById("roundResult").innerHTML = "Game Over: Tie game!";
		gamePlaying = false;
	} else if(computerScore > playerScore){
		document.getElementById("roundResult").innerHTML = "Game Over: You lose!";
		gamePlaying = false;
	} else {
		document.getElementById("roundResult").innerHTML = "Game Over: You Won!";
		gamePlaying = false;
	}
}

function scoreTracker(result){
	if(gameResult == "computerWin"){
		computerScore++;
	} else if(gameResult == "userWin"){
		playerScore++;
	} 
	pScore.innerHTML = "Player Score: " + String(playerScore);
	cScore.innerHTML = "Computer Score: " + String(computerScore);
}


