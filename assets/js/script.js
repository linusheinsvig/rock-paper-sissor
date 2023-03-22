let userScore = 0;
let oponentScore = 0;
let userScoreSpan = document.getElementById('userScore');
let oponentScoreSpan = document.getElementById('oponentScore');
let result = document.getElementById('result')
let rock = document.getElementById('rock');
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    result.innerHTML = 'You Win!';
}

function lose() {
    oponentScore++;
    oponentScoreSpan.innerHTML = oponentScore;
    result.innerHTML = 'You Lose!';
}

function draw() {
    result.innerHTML = "It's a Draw!";
}

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


function main() {
rock.addEventListener('click', function(){
    game('rock');
}) 

paper.addEventListener('click', function(){
    game('paper');
}) 

scissors.addEventListener('click', function(){
    game('scissors')
}) 
}

main();
