       // the main function that plays the game 
       function playGame(){
        let playerSelection, computerSelection, result;
        let counter, playerWin, computerWin = 0;
    
        // display output
            console.log("Round: " +(counter + 1));
            console.log("Computer chose: " +computerSelection +" and you chose " +playerSelection+ ".");
            console.log(result);
            console.log("Player: " +playerWin+ " Computer: " +computerWin);
            console.log("");
    }
   
    //event listener
        let rock = document.querySelector('.rock');
        let paper = document.querySelectio('.paper');
        let scissors = document.querySelectio('.scissors');

        rock.addEventListener('click, playRound()');
        paper.addEventListener('click, playRound(.paper)');
        scissors.addEventListener('click, playRound(.scissors)');


    // computer selects their move randomly
     function computerPlay() {
        let number = Math.floor(Math.random() * 3);
        switch (number){
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
        if (computerSelection == playerSelection){
            return playerSelection+ " & " +computerSelection+ " are equal! Round tied!";
        }
        else if (computerSelection == "ROCK"){
            switch (playerSelection){
                case "PAPER":
                    return "Paper beats Rock, You Win!";
                case "SCISSORS":
                    return "Rock beats Scissors, You Lose!";
            }
        }
        else if (computerSelection == "PAPER"){
            switch (playerSelection){
                case "SCISSORS":
                    return "Scissors beat Paper, You Win!";
                case "ROCK":
                    return "Paper beats Rock, You Lose!";
            }
        }
        else if (computerSelection == "SCISSORS"){
            switch (playerSelection){
                case "PAPER":
                    return "Scissors beat Paper, You Lose!";
                case "ROCK":
                    return "Rock beats Scissors, You Win!";
            }
        }
    }
    // Start Game
    playGame();  