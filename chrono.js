let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startButton = document.getElementById("start-btn");
let allTime = document.getElementById("all-time");

let secVal = 0;
let minVal = 0;
let counter = 0;

// Function used inside TimeHandler when 15 minutes is reached
function myStopFunction() {
    clearInterval(timer);
}

// Main function
function timeHandler() {
    if (counter == 900) {
        allTime.style.color = "red";
        myStopFunction();
        return;
    }
    // update counter each second
    counter++;
    secVal++;
    sec.innerHTML = secVal;

    if (secVal == 60) {
        sec.innerHTML = 0;
        minVal++;
        min.innerHTML = minVal;
        secVal = 0;
    }
}

// Calls the function every second
let timer = function() {
    setInterval(timeHandler, 1000);
}

startButton.addEventListener("click", timer);
startButton.click();