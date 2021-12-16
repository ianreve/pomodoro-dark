// Display for current time
var dt = new Date();
document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();

function time(currentTime) {

    var dt = new Date();
    document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();
}
setInterval(time, 1000);

//audio file 
var audio = new Audio('https://soundbible.com/mp3/service-bell_daniel_simion.mp3');


//active function navigation

$(function () {
    $('#navbar a').click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');

        var page = document.getElementsByClassName("nav-link active");

        if (page[0].textContent == "Short Break") {
            console.log(page[0].textContent)
            document.body.style.backgroundColor = "#343D46";
            document.getElementById("minutes").innerHTML = `0${5}`;
            document.getElementById("seconds").innerHTML = `0${0}`; // change minutes value
            Stop();





        } else if (page[0].textContent == "Long Break") {
            console.log(page[0].textContent)
            document.body.style.backgroundColor = "#36454F";
            document.getElementById("minutes").innerHTML = 15;
            document.getElementById("seconds").innerHTML = `0${0}`;
            Stop();


        } else {
            console.log(page[0].textContent)
            document.body.style.backgroundColor = "#222C32";
            document.getElementById("minutes").innerHTML = 25;
            document.getElementById("seconds").innerHTML = `0${0}`;
            Stop();
         
        
        }
        console.log(page);

    });
});


// timer without using loal storage

var start = document.getElementById("mixBut");
// var stop = document.getElementById("stop");
// var reset = document.getElementById("reset-timer");

const d_minutes = document.getElementById('minutes')
// console.log(d_minutes)
const d_seconds = document.getElementById('seconds')
// console.log(d_seconds)


//store a reference to a timer variable






function timer() {
    // console.log('going in to timer function ')
    //Work Timer Countdown
    // console.log(`start timer inside timer function is ${startTimer}`)

    if (d_seconds.innerText != 0) {
        // console.log(d_seconds.innerText) // for testing
        d_seconds.innerText--;
        if (d_seconds.innerText < 10) {

            d_seconds.innerText = "0" + d_seconds.innerText--;
            // console.log("if is working") // for testing

        }

    } else if (d_minutes.innerText != 0 && d_seconds.innerText == 0) {
        d_seconds.innerText = 59;
        d_minutes.innerText--;

       
        if (d_seconds.innerText < 10) {

            d_seconds.innerText = "0" + d_seconds.innerText--;
        
        } else if (d_minutes.innerText < 10)
            d_minutes.innerText = "0" + d_minutes.innerText--;
        }

        else if(d_minutes.innerText == 00 && d_seconds.innerText == 00){
            audio.play();
            alert("timer done")
            // Stop()
            var page = document.getElementsByClassName("nav-link active");

            if (page[0].textContent == "Short Break") {
                // console.log(page[0].textContent)
                // document.body.style.backgroundColor = "#343D46";
                document.getElementById("minutes").innerHTML = `0${5}`;
                document.getElementById("seconds").innerHTML = `0${0}`; // change minutes value
                Stop();
    
    
    
    
    
            } else if (page[0].textContent == "Long Break") {
                // console.log(page[0].textContent)
                // document.body.style.backgroundColor = "#36454F";
                document.getElementById("minutes").innerHTML = 15;
                document.getElementById("seconds").innerHTML = `0${0}`;
                Stop();
    
    
            } else {
                // console.log(page[0].textContent)
                // document.body.style.backgroundColor = "#222C32";
                document.getElementById("minutes").innerHTML = 25;
                document.getElementById("seconds").innerHTML = `0${0}`;
                Stop();
             
            
            }


        }
        console.log("else if is working"+ d_minutes.textContent + d_seconds.textContent)



}
//start snd stop
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

        // startBtn = this.textContent = "Stop"
    } 
    // else {

    //     console.log("start timer inside else"+startTimer) // for testing 
    //     startBtn = this.textContent = "Start"
    // }
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

        // document.body.style.backgroundColor = "#343D46";
        document.getElementById("minutes").innerHTML = `0${5}`; // change minutes value
        document.getElementById("seconds").innerHTML = `0${0}`; // change seconds values
        Stop();





    } else if (page[0].textContent == "Long Break") {
        // console.log(page[0].textContent)
        // document.body.style.backgroundColor = "#36454F";
        document.getElementById("minutes").innerHTML = 15;
        document.getElementById("seconds").innerHTML = `0${0}`; // change seconds values
        Stop();




    } else {
        // console.log(page[0].textContent)
        // document.body.style.backgroundColor = "#222C32";
        document.getElementById("minutes").innerHTML = 25;
        document.getElementById("seconds").innerHTML = `0${0}`; // change seconds values

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


/*
// Display for current time
var dt = new Date();
document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();

function time(currentTime) {

    var dt = new Date();
    document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();
}
setInterval(time, 1000);

//audio file 
var audio = new Audio('https://soundbible.com/mp3/service-bell_daniel_simion.mp3');


//active function navigation

$(function () {
    $('#navbar a').click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');

        var page = document.getElementsByClassName("nav-link active");

        if (page[0].textContent == "Short Break") {
            console.log(page[0].textContent)
            document.body.style.backgroundColor = "#343D46";
            document.getElementById("minutes").innerHTML = `0${5}`;
            document.getElementById("seconds").innerHTML = `0${0}`; // change minutes value
            Stop();





        } else if (page[0].textContent == "Long Break") {
            console.log(page[0].textContent)
            document.body.style.backgroundColor = "#36454F";
            document.getElementById("minutes").innerHTML = 15;
            document.getElementById("seconds").innerHTML = `0${0}`;
            Stop();


        } else {
            console.log(page[0].textContent)
            document.body.style.backgroundColor = "#222C32";
            document.getElementById("minutes").innerHTML = 25;
            document.getElementById("seconds").innerHTML = `0${0}`;
            Stop();
         
            if (d_minutes == 00 && d_seconds == 00) {
                alert("timer done");
            }
        }
        console.log(page);

    });
});


// timer without using loal storage

var start = document.getElementById("mixBut");
// var stop = document.getElementById("stop");
// var reset = document.getElementById("reset-timer");

const d_minutes = document.getElementById('minutes')
// console.log(d_minutes)
const d_seconds = document.getElementById('seconds')
// console.log(d_seconds)


//store a reference to a timer variable






function timer() {
    // console.log('going in to timer function ')
    //Work Timer Countdown
    // console.log(`start timer inside timer function is ${startTimer}`)

    if (d_seconds.innerText != 0) {
        // console.log(d_seconds.innerText) // for testing
        d_seconds.innerText--;
        if (d_seconds.innerText < 10) {

            d_seconds.innerText = "0" + d_seconds.innerText--;
            // console.log("if is working") // for testing

        }

    } else if (d_minutes.innerText != 0 && d_seconds.innerText == 0) {
        d_seconds.innerText = 59;
        d_minutes.innerText--;

       
        if (d_seconds.innerText < 10) {

            d_seconds.innerText = "0" + d_seconds.innerText--;
        
        } else if (d_minutes.innerText < 10)
            d_minutes.innerText = "0" + d_minutes.innerText--;
        }

        else if(d_minutes.innerText == 00 && d_seconds.innerText == 00){
            audio.play();
            alert("timer done")
            Stop()
        }
        console.log("else if is working"+ d_minutes.textContent + d_seconds.textContent)



}
//start snd stop
var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", Start);

function Start() {
    console.log("Started");
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.innerText = "Stop";
    timer();



}

function Stop() {
    console.log("Stopped");
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

        // startBtn = this.textContent = "Stop"
    } else {

        // console.log("start timer inside else"+startTimer) // for testing 
        // startBtn = this.textContent = "Start"
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

        // document.body.style.backgroundColor = "#343D46";
        document.getElementById("minutes").innerHTML = `0${5}`; // change minutes value
        document.getElementById("seconds").innerHTML = `0${0}`; // change seconds values
        Stop();





    } else if (page[0].textContent == "Long Break") {
        // console.log(page[0].textContent)
        // document.body.style.backgroundColor = "#36454F";
        document.getElementById("minutes").innerHTML = 15;
        document.getElementById("seconds").innerHTML = `0${0}`; // change seconds values
        Stop();




    } else {
        // console.log(page[0].textContent)
        // document.body.style.backgroundColor = "#222C32";
        document.getElementById("minutes").innerHTML = 25;
        document.getElementById("seconds").innerHTML = `0${0}`; // change seconds values

        Stop();
    }



})



//task name 
var edit = document.getElementById("edit-task");
var taskName = document.getElementById("task-name")
edit.addEventListener('click', function () {
    var task = prompt("Enter a Task")
    document.getElementById("task-name").innerHTML = task;
})*/