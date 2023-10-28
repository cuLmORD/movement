// Get elements n stuff
const box = document.querySelector(".box");
const upB = document.querySelector(".up");
const downB = document.querySelector(".down");
const leftB = document.querySelector(".left");
const rightB = document.querySelector(".right");
let newT = 0;
let newL = 0;

// functions
const moveU = () => {
    newT -= 10;
    box.style.top = newT + "px";
    console.log(newT);
};

const moveD = () => {
    newT += 10;
    box.style.top = newT + "px";
    console.log(newT);
};

const moveL = () => {
    newL -= 10;
    box.style.left = newL + "px";
    console.log(newL);
};

const moveR = () => {
    newL += 10;
    box.style.left = newL + "px";
    console.log(newL);
};

//Event listeners
upB.onclick = moveU;
downB.onclick = moveD;
leftB.onclick = moveL;
rightB.onclick = moveR;