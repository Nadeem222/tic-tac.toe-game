let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector("#newGame");
let resetGameBtn =document.querySelector("#resetGame")
let msgContainer = document.querySelector(".msgContainer")


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click' , () =>{
        if(turn0){
            box.innerText = "O"
            turn0 = false;
        }else{
            box.innerText = "X"
            turn0= true
        }
        box.disabled = true;

        checkWinner()
    })
})

const resetGame = () =>{
    turn0 = false;
    enabledBoxes()
    msgContainer.classList.add("hide")
}

const disabledBoxes = () =>{
    for(let box of  boxes){
        box.disabled = true;
    }
}
const enabledBoxes = () =>{
    for(let box of  boxes){
        box.disabled = false;
        box.innerText = ""
        msg.innerHTML = ""
    }
}
const showWinner = (winner) =>{
    msg.innerHTML = `<h2> Congratulation! Winner is ${winner}</h2>`
    disabledBoxes()

}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]] , boxes[pattern[1]], boxes[pattern[2]])
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner "+ pos1Val)
                showWinner(pos1Val)
                msgContainer.classList.remove("hide")
            }  
        }
    }
}

newGameBtn.addEventListener("click" , resetGame)
resetGameBtn.addEventListener("click" , resetGame)


