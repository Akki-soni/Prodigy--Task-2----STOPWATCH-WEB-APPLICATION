let startTime = 0;
let currentTime = 0;
let intervalId = null;
let lapCount = 0;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTimer);

function startTimer() {
  startTime = Date.now() - currentTime;
  intervalId = setInterval(updateTimer, 100); // update every 100ms for better accuracy
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  currentTime = 0;
  lapCount = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lapTimer() {
  lapCount++; // increment lapCount before displaying
  const lapTime = formatTime(currentTime);
  const lapElement = document.createElement("li");
  lapElement.innerHTML = `Lap ${lapCount}: ${lapTime}`;
  document.getElementById("laps").appendChild(lapElement);
}

function updateTimer() {
  currentTime = Date.now() - startTime;
  document.getElementById("display").innerHTML = formatTime(currentTime);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 100); // add milliseconds if needed
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
  return (value < 10 ? "0" : "") + value;
}
