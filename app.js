let chironBtn = document.querySelector('.chiron');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let Choices = document.querySelector('.choices');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

let userScore = 0;
let compScore = 0;


const genCompChoice = () => {
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};



const drawGame = () => {
    msg.innerText = "GAME'S DRAW!!"
    
};




const showWinner =  (userWin, userChoice, compChoice) => {
    if (userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msgContainer.classList.remove("hide");
        msg.innerText = `Your ${userChoice} beats ${compChoice} 🔥`;
        
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.classList.remove("hide");
        msg.innerText = `${compChoice} beats your ${userChoice} 😞`;
        
    }
};





const playGame = (userChoice) => {
    console.log("User choice is: ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice is: ",compChoice);
    
    if (userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


};




const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


chironBtn.addEventListener("click",() =>{
    window.location.href = "https://linktr.ee/_chironnnn_"
});