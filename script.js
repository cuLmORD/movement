// Get elements n stuff
const box = document.querySelector(".box");
const upB = document.querySelector(".up");
const downB = document.querySelector(".down");
const leftB = document.querySelector(".left");
const rightB = document.querySelector(".right");
const X = document.querySelector(".X");
const Y = document.querySelector(".Y");
let newT = 0;
let newT2 = 0
let newL = 0;
let newL2 = 0;

//functions for cube escape check
function checkForEscapeT() { 
    if ((newT < -100) || (newT > 100)) {
        X.innerHTML = "Get back in there >:["
    } else {
        return;
    }
};
function checkForEscapeL() {
    if ((newL < -200) || (newL > 200)) {
        Y.innerHTML = "Get back in there >:["
    } else {
        return;
    }
};

// extraction function for extracting the fkin movement
function extraction(bruh) {
    let char = bruh.code;
    let Xchar = char.substring(3);
    move(Xchar);
    console.log(Xchar);
}
function move(X) {
    if (X === "W") {
        moveKW();
    } if (X === "A") {
        moveKA();
    } if (X === "S") {
        moveKS();
    } if (X === "D") {
        moveKD();
    }
}

//function for movement with WASD
function moveKW() {
    if (newT === -100) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newT -= 5;
        newT2 = newT + "px";
        box.style.top = newT2;
        X.innerHTML = "X: " + ((-1) * newT);
    }
}
function moveKA() {
    if (newL === -200) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newL -= 5;
        newL2 = newL + "px";
        box.style.left = newL2;
        Y.innerHTML = "Y: " + newL;
    }
}
function moveKS() {
    if (newT === 100) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newT += 5;
        newT2 = newT + "px";
        box.style.top = newT2;
        X.innerHTML = "X: " + ((-1) * newT);
    }
}
function moveKD() {
    if (newL === 200) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newL += 5;
        newL2 = newL + "px";
        box.style.left = newL2;
        Y.innerHTML = "Y: " + newL;
    }
}
// functions for movement with buttons
const moveU = () => {
    if (newT === -100) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newT -= 10;
        box.style.top = newT + "px";
        X.innerHTML = "X: " + ((-1) * newT);
        console.log(newT);
        checkForEscapeT(); // checks for cube escape top or bottom
    }
};

const moveD = () => {
    if (newT === 100) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newT += 10;
        box.style.top = newT + "px";
        X.innerHTML = "X: " + ((-1) * newT);
        console.log(newT);
        checkForEscapeT(); // checks for cube escape top or bottom
    }
};

const moveL = () => {
    if (newL === -200) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newL -= 10;
        box.style.left = newL + "px";
        Y.innerHTML = "Y: " + newL;
        console.log(newL);
        checkForEscapeL(); // checks for cube escape left or right
    }
};

const moveR = () => {
    if (newL === 200) {
        box.innerHTML = "T^T";
        return;
    } else {
        box.innerHTML = ":D";
        newL += 10;
        box.style.left = newL + "px";
        Y.innerHTML = "Y: " + newL;
        console.log(newL);
        checkForEscapeL(); // checks for cube escape left or right
    }
};

//Event listeners
upB.onclick = moveU;
downB.onclick = moveD;
leftB.onclick = moveL;
rightB.onclick = moveR;
document.addEventListener("keydown", extraction);