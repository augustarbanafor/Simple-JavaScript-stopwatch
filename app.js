
// Grab the needed elements using the JS DOM Selector and store them in a variable
const timer = document.querySelector('.timer');
const playPauseBtn = document.querySelector('#playPauseBtn');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.querySelector('#resetBtn');


// Variables for Time Values
let seconds = 0;
let minutes = 0;
let hours = 0;

 //Variables for Leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


//Create a stopwatch function which allows the time values increment in secs/mins/hours
//the function should also ensure the laeding zeros are retained
function stopwatch(){
    seconds++;            //seconds begins incrementing
    if(seconds/60 === 1){ //once the seconds timevalue reaches 60, it stops and minutes begins incrementing
        seconds = 0;
        minutes ++;
        
        if(minutes/60 === 1){
            minutes = 0;
            hours ++;
        }
    }
    // ensure the leading zeros are retained
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }

    
    timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


//variables for timerInterval and  timerStatus
let timerInterval = null;
let timerStatus = "stopped";


playPauseBtn.addEventListener('click', () => {
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopwatch, 1000);
        playPauseBtn.innerHTML = '<img src="/images/pause.svg" alt="pause" id="pause">'
        playPauseBtn.style.backgroundColor ='orange'
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        playPauseBtn.innerHTML = '<img src="/images/play.svg" alt="play" id="play">'
        playPauseBtn.style.backgroundColor ='green'
        timerStatus = "stopped"
    }
})

resetBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    second = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = "00:00:00"
})




