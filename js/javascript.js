
//clicking sound//
let clicky = () => new Audio("./audio/../audio/mixit-single-key-press.wav").play();

//side panel bit
function openPane() {
    document.getElementById("sidePanel").style.width = "280px";
};

function closePane() {
    document.getElementById("sidePanel").style.width = "27px";
};