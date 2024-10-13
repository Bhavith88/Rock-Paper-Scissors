let userScore=0;
let compScore=0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector("#User-Score");
const compScorePara = document.querySelector("#Computer-Score");

const genCompChoice = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const drawGame = () => {
    msg.innerText = "Game was a Draw";
    msg.style.backgroundColor = "#2E382E"; 
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You Lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "maroon"; 
    }
};  

const playGame = (userChoice) => {
    console.log("User choice : ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice : ",compChoice);
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'Rock'){
            userWin = compChoice === 'Paper' ? false : true;
        } else if(userChoice === 'Scissors'){
            userWin = compChoice === 'Rock' ? false : true;
        } else {
            compChoice === 'Scissors' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})