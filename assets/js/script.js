let userScore = 0;
let oponentScore = 0;
let userScoreSpan = document.getElementById('yourScore');
let oponentScoreSpan = document.getElementById('oponentScore');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function win() {
    console.log("WIN")
}

function lose() {
    console.log("LOST")
}

function draw() {
    console.log("DRAW")
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win();
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose();
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw();
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
