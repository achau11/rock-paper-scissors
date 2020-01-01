// keep score function.. 
/*
function updateScore (winMessage){
    let resultDiv = document.querySelector('.results');
    let counter

    if (winMessage.includes('Win')) {
        winCount += 1;
        
        // create node and display the win
        winDisplay = document.createElement('p');
        winDisplay.textContent = winCount;
        resultDiv.appendChild(winDisplay);
        
        return winCount;
    }
    else if (winMessage.includes('LOSE')) {
        // add 1 to lose
    }
    else {
        // add 1 to draw
    }
}
*/

//event listener
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

//CASE: ROCK
rock.addEventListener('click', function (e) {
    // change heading on click
    const heading = document.querySelector('#rock h2');
    heading.textContent = 'YOU CHOSE: ROCK';

    // remove other choices
    paper.parentNode.removeChild(paper);
    scissors.parentNode.removeChild(scissors);

    // create new computer choice block

    let computerSelection = computerPlay(); // Get the computer selection.
    const computerChoice = document.createElement('div');
    const choice = document.querySelector('.choice');

    computerChoice.classList.add('block');
    choice.appendChild(computerChoice);

    // add heading to the computer choice block
    const headingComp = document.createElement('h2');
    headingComp.textContent = 'COMPUTER CHOSE: ' + computerSelection;
    computerChoice.appendChild(headingComp);

    // Create a result block and return the heading as a string
    const result = document.createElement('div');
    result.classList.add('block');
    choice.appendChild(result);

    const headingResult = document.createElement('h2');
    let roundResult = playRound('ROCK', computerSelection);

    headingResult.textContent = roundResult;
    result.appendChild(headingResult);

    // Call update score function.
    updateScore(roundResult);
}, { once: true });

//CASE: PAPER
paper.addEventListener('click', function (e) {
    // change heading on click
    const heading = document.querySelector('#paper h2');
    heading.textContent = 'YOU CHOSE: PAPER';

    // remove other choices
    rock.parentNode.removeChild(rock);
    scissors.parentNode.removeChild(scissors);

    // create new computer choice block

    let computerSelection = computerPlay(); // Get the computer selection.
    const computerChoice = document.createElement('div');
    const choice = document.querySelector('.choice');

    computerChoice.classList.add('block');
    choice.appendChild(computerChoice);

    // add heading to the computer choice block
    const headingComp = document.createElement('h2');
    headingComp.textContent = 'COMPUTER CHOSE: ' + computerSelection;
    computerChoice.appendChild(headingComp);

    // Create a result block
    const result = document.createElement('div');
    result.classList.add('block');
    choice.appendChild(result);

    const headingResult = document.createElement('h2');
    headingResult.textContent = playRound('PAPER', computerSelection);
    result.appendChild(headingResult);

}, { once: true });

//CASE: SCISSORS
scissors.addEventListener('click', function (e) {
    // change heading on click
    const heading = document.querySelector('#scissors h2');
    heading.textContent = 'YOU CHOSE: SCISSORS';

    // remove other choices
    paper.parentNode.removeChild(paper);
    rock.parentNode.removeChild(rock);

    // create new computer choice block

    let computerSelection = computerPlay(); // Get the computer selection.
    const computerChoice = document.createElement('div');
    const choice = document.querySelector('.choice');

    computerChoice.classList.add('block');
    choice.appendChild(computerChoice);

    // add heading to the computer choice block
    const headingComp = document.createElement('h2');
    headingComp.textContent = 'COMPUTER CHOSE: ' + computerSelection;
    computerChoice.appendChild(headingComp);

    // Create a result block
    const result = document.createElement('div');
    result.classList.add('block');
    choice.appendChild(result);

    const headingResult = document.createElement('h2');
    headingResult.textContent = playRound('SCISSORS', computerSelection);
    result.appendChild(headingResult);

}, { once: true });



// computer selects their move randomly
function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}


// one round of gameplay
function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return playerSelection + " & " + computerSelection + " are equal! Round tied!";
    }
    else if (computerSelection == "ROCK") {
        switch (playerSelection) {
            case "PAPER":
                return "Paper beats Rock, You Win!";
            case "SCISSORS":
                return "Rock beats Scissors, You Lose!";
        }
    }
    else if (computerSelection == "PAPER") {
        switch (playerSelection) {
            case "SCISSORS":
                return "Scissors beat Paper, You Win!";
            case "ROCK":
                return "Paper beats Rock, You Lose!";
        }
    }
    else if (computerSelection == "SCISSORS") {
        switch (playerSelection) {
            case "PAPER":
                return "Scissors beat Paper, You Lose!";
            case "ROCK":
                return "Rock beats Scissors, You Win!";
        }
    }
}
