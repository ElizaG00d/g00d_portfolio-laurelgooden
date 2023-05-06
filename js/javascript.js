
//pop up form js//
function formOpen() {
    document.getElementById('contactForm').style.display = 'block';
};

function formClose() {
    document.getElementById('contactForm').style.display = 'none';
};

//end popup form js//

//clicking sound//
let clicky = () => new Audio("./audio/../audio/mixit-single-key-press.wav").play();

//side panel bit
function openPane() {
    document.getElementById("sidePanel").style.width = "250px";
};

function closePane() {
    document.getElementById("sidePanel").style.width = "27px";
};