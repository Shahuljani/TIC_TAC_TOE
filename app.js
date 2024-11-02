let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-button");

let newgameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO

let clickCount = 0;

//Winner Pattern

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//Reset Game

const resetGame = () => {
    turnO = true;
    clickCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//CLICKING BOX

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was Clicked")
        if (turnO) { //playerO
            box.innerText = "O";
            turnO = false;
        } else{ //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        clickCount++;
        checkWinner ();
    });
});

//Disabling Boxes

const disableBoxes = () => {
    for(let box of boxes ){
        box.disabled = true ;
    }
};

//Enabling Boxes

const enableBoxes = () => {
    for(let box of boxes ){
        box.disabled = false ;
        box.innerText = "";
    }
};

//DISPLAY WINNER
const showWinner = (winner) => {

    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//DRAW

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//CHECK WINNER

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);

                showWinner(pos1Val);
            }
        }
    }
    if (clickCount === 9) {
        showDraw();
    }
};

//Reset the Game

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


