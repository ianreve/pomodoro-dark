//audio file 
var audio = new Audio('https://soundbible.com/mp3/service-bell_daniel_simion.mp3');

// Display for current time
var dt = new Date();
document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();

function time(currentTime) {

    var dt = new Date();
    document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();
}
setInterval(time, 1000);

//Nav Choices Function to ba called 
function pomodoro() {
    document.getElementById("minutes").innerHTML = 25;
    document.getElementById("seconds").innerHTML = `0${0}`;
}

function shortBreak() {
    document.getElementById("minutes").innerHTML = `0${5}`;
    document.getElementById("seconds").innerHTML = `0${0}`; 
}

function longBreak() {
    document.getElementById("minutes").innerHTML = 15;
    document.getElementById("seconds").innerHTML = `0${0}`;
}

//active function navigation
$(function () {
    $('#navbar a').click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');

        var page = document.getElementsByClassName("nav-link active");

        if (page[0].textContent == "Short Break") {
            document.body.style.backgroundColor = "#343D46";
            shortBreak();
            Stop();
        } else if (page[0].textContent == "Long Break") {

            document.body.style.backgroundColor = "#36454F";
            longBreak();
            Stop();
        } else {
            document.body.style.backgroundColor = "#222C32";
            pomodoro();
            Stop();
        }
        console.log(page);

    });
});

//Timer ------

var start = document.getElementById("mixBut");
const d_minutes = document.getElementById('minutes');
const d_seconds = document.getElementById('seconds');

function timer() {
    // console.log('going in to timer function ')
    //Work Timer Countdown
    // console.log(`start timer inside timer function is ${startTimer}`)

    if (d_seconds.innerText != 0) {   // taking the default seconds and decerement 
      
        d_seconds.innerText--;

        if (d_seconds.innerText < 10) { //to make 9 below with 0 at the begining 

            d_seconds.innerText = "0" + d_seconds.innerText--;
            console.log("if is working") // for testing
        }
    } else if (d_minutes.innerText != 0 && d_seconds.innerText == 0) { //pass another 59 seconds if minutes changes
        d_seconds.innerText = 59;
        d_minutes.innerText--;

        console.log("Else if working");
        if (d_seconds.innerText < 10) {
            d_seconds.innerText = "0" + d_seconds.innerText--;

        } else if (d_minutes.innerText < 10){

            d_minutes.innerText = "0" + d_minutes.innerText--;
        }
    } else if (d_minutes.innerText == 00 && d_seconds.innerText == 00) { //process when the timer is done
      
         audio.play();
         alert("timer done")
       // below is to change the value when switching tab 
        var page = document.getElementsByClassName("nav-link active");

        if (page[0].textContent == "Short Break") {
            shortBreak();
            Stop();
        } else if (page[0].textContent == "Long Break") {
            longBreak();
            Stop();
        } else {
            pomodoro();
            Stop();
        }
    }
    console.log("else if is working " + d_minutes.textContent + d_seconds.textContent); // for testing



}

////////////////////////////////////////////
//start and stop
var clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
var mixBut = document.getElementById("mixBut");
mixBut.addEventListener("click", Start);

function Start() {
    console.log("Started");
    clickSound.play();
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.innerText = "Stop";
    timer();
}

function Stop() {
    console.log("Stopped");
    clickSound.play();
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.innerText = "Start";
    stopInterval()
}

//start timer 
var startTimer;

var startBtn = document.getElementById('mixBut')
start.addEventListener('click', function () {


    if (startTimer === undefined) {
        // console.log(startTimer) // for testing 
        startTimer = setInterval(timer, 1000)


    }

})


//Stop Timer Function
function stopInterval() {
    clearInterval(startTimer);
    startTimer = undefined;
}


// reset button 
var reserBtn = document.getElementById("reset-timer");
reserBtn.addEventListener('click', function () {
    var page = document.getElementsByClassName("nav-link active");

    if (page[0].textContent == "Short Break") {
        shortBreak();
        Stop();
    } else if (page[0].textContent == "Long Break") {
        longBreak()
        Stop();
    } else {
        pomodoro();
        Stop();
    }


})


//task name 
var edit = document.getElementById("edit-task");
var taskName = document.getElementById("task-name")
edit.addEventListener('click', function () {
    var task = prompt("Enter a Task")
    document.getElementById("task-name").innerHTML = task;
})