let boxes = document.querySelectorAll(".box");
// let box=document.querySelector(".box");
let reset1 = document.querySelector(".reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText=0;
      turn0=false;
    }
    else
    {
        box.innerText=1;
        turn0=true;
    }
    box.disabled=true;
    checkwinner();
  });
});
const showMsg=(winner)=>{
    msg.innerText=(`congratulations, winner is ${winner}`);
    msgcontainer.classList.remove("hide");
}
const disabled=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const reset=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const checkwinner=()=>{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                console.log("winner");
                showMsg(pos1);
                disabled();
            }
        }
    }
}
reset1.addEventListener("click",()=>{
    reset();
})