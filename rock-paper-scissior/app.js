let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissior"];
    let randindx = Math.floor(Math.random() * 3);
    return options[randindx];
};

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Game Draw, Play Again";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorepara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user", userChoice);
    const compChoice = genCompChoice();
    console.log("comp", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissior, papper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissior
            userWin = compChoice === "scissior" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});