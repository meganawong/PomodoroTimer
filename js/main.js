var minutes = 25;
var seconds = "00";
var breakTime = 5;
var sessionTime = 25;


var click = new Audio("Click.mp3");
var bell = new Audio("Bell.mp3")

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("breakTime").innerHTML = breakTime;
    document.getElementById("sessionTime").innerHTML = sessionTime;
    document.getElementById("type").innerHTML = "SESSION";
}

function start() {

    var session = true;

    bell.play();

    minutes = sessionTime - 1;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;

        if (minutes < 0) {
            if (session == true) {
                document.getElementById("minutes").innerHTML = breakTime - 1;
                document.getElementById("seconds").innerHTML = 60;
                document.getElementById("type").innerHTML = "BREAK";
                bell.play();
                session = false;
            } else {
                document.getElementById("minutes").innerHTML = sessionTime - 1;
                document.getElementById("seconds").innerHTML = 60;
                document.getElementById("type").innerHTML = "SESSION";
                bell.play();
                session = true;
            }
        }

    }

    function secondsTimer() {
        seconds = seconds - 1
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds <= 0) {
            seconds = 60
        }
    }
}

function breakIncrease() {
    click.play();

    breakTime += 1;
    document.getElementById("breakTime").innerHTML = breakTime;
}

function breakDecrease() {
    click.play();

    breakTime -= 1;
    document.getElementById("breakTime").innerHTML = breakTime;
}

function sessionIncrease() {
    click.play();

    sessionTime += 1;
    document.getElementById("sessionTime").innerHTML = sessionTime;
}

function sessionDecrease() {
    click.play();

    sessionTime -= 1;
    document.getElementById("sessionTime").innerHTML = sessionTime;
}

function reset() {
    click.play();
    document.getElementById("minutes").innerHTML = sessionTime;
}