let userScore = 0;
let oponentScore = 0;
let userScoreSpan = document.getElementById('userScore');
let oponentScoreSpan = document.getElementById('oponentScore');
let result = document.getElementById('result')
let rock = document.getElementById('rock');
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let yourScore = document.getElementById('your-score')
let oponentScoreDiv = document.getElementById('oponent-score')

// Generates computers choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Changes choice to font awsome icons
function convertToI(word) {
    if (word === 'rock') return '<i class="fa-regular fa-hand-back-fist"></i>'
    if (word === 'paper') return '<i class="fa-regular fa-hand"></i>'
    if (word === 'scissors') return '<i class="fa-regular fa-hand-scissors"></i>'
}

// Updating scores for winner, looser and draw
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    result.innerHTML = `${convertToI(userChoice)}  Beats  ${convertToI(computerChoice)}`;
    yourScore.style.backgroundColor = 'green';
    oponentScoreDiv.style.backgroundColor = 'red';
}

function lose(userChoice, computerChoice) {
    oponentScore++;
    oponentScoreSpan.innerHTML = oponentScore;
    result.innerHTML = `${convertToI(userChoice)}  Gets Beaten By  ${convertToI(computerChoice)}`;
    yourScore.style.backgroundColor = 'red';
    oponentScoreDiv.style.backgroundColor = 'green';
}

function draw(userChoice, computerChoice) {
    result.innerHTML = "It's a Draw!";
    result.innerHTML = `${convertToI(userChoice)}  Cant't Do Anything To  ${convertToI(computerChoice)}`;
    yourScore.style.backgroundColor = 'var(--clr-gray)';
    oponentScoreDiv.style.backgroundColor = 'var(--clr-gray)';
}

// Main Game function
function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

// EventListeners for user choises
function main() {
    rock.addEventListener('click', function () {
        game('rock');
    })

    paper.addEventListener('click', function () {
        game('paper');
    })

    scissors.addEventListener('click', function () {
        game('scissors')
    })
}

main();