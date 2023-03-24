let userScore = 0;
let oponentScore = 0;
let userScoreSpan = document.getElementById('userScore');
let oponentScoreSpan = document.getElementById('oponentScore');
let result = document.getElementById('result-box')
let rock = document.getElementById('rock');
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

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
    result.classList.add('correct');
    setTimeout(function () {
        result.classList.remove('correct')
    }, 1000);
}

function lose(userChoice, computerChoice) {
    oponentScore++;
    oponentScoreSpan.innerHTML = oponentScore;
    result.innerHTML = `${convertToI(userChoice)}  Gets Beaten By  ${convertToI(computerChoice)}`;
    result.classList.add('wrong');
    setTimeout(function () {
        result.classList.remove('wrong')
    }, 1000);
}

function draw(userChoice, computerChoice) {
    result.innerHTML = "It's a Draw!";
    result.innerHTML = `${convertToI(userChoice)}  Cant't Do Anything To  ${convertToI(computerChoice)}`;
    result.classList.add('draw')
    setTimeout(function () {
        result.classList.remove('draw')
    }, 1000);
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
    });

    paper.addEventListener('click', function () {
        game('paper');
    });

    scissors.addEventListener('click', function () {
        game('scissors');
    });
}

main();