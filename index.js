let boxes= document.querySelectorAll(".box");
let resetbtn =document.querySelector(".reset");
let newgame= document.querySelector(".new");
let msgcontainer =document.querySelector(".msg");
let message =document.querySelector(".winner");
let mode =document.querySelector(".btn");
let turn =false;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetgame =()=>{
    turn =true;
    boxes.innerText ="";
    enablebox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box is clicked");
        if(turn){
            box.innerText="o";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disabledbox =() =>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enablebox =() =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(pos1) =>{
    message.innerText=`congrulations, winner is${pos1}`;
    msgcontainer.classList.remove("hide");
    disabledbox ();
};

const checkwinner= ()=>{
    for (let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!=""){
            if(pos1=== pos2 && pos2 === pos3){
                console.log(pos1);
                disabledbox();
                showwinner(pos1);
            }
        }
    }
};

newgame.addEventListener("click", resetgame );
resetbtn.addEventListener("click", resetgame );

let body=document.querySelector("body");
let color =true;
mode.addEventListener("click",()=>{
    if(color === true){
        body.style.backgroundColor="black";
        color=false;
    }
    else{
        body.style.backgroundColor="aquamarine";
        color =true;
    }
});

