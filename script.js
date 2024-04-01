// DOM
const timer = {
  timeCounter: document.getElementById("timeCounter"),
  startBtn: document.getElementById("startBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  restartBtn: document.getElementById("restartBtn"),

  startTime: 0,
  currentTime: 0,
  elapsedTime: 0,
  pause: true,
  intervalId: null,
  hrs: 0,
  mins: 0,
  secs: 0,
};

timer.startBtn.addEventListener("click", () => {
  if (timer.pause) {
    timer.pause = false;
    timer.startTime = Date.now() - timer.elapsedTime;
    timer.intervalId = setInterval(updateTime, 75);
  }
});

timer.pauseBtn.addEventListener("click", () => {
  if (!timer.pause) {
    timer.pause = true;
    timer.elapsedTime = Date.now() - timer.startTime;
    clearInterval(timer.intervalId);
  }
});

timer.restartBtn.addEventListener("click", () => {
  timer.pause = true;
  clearInterval(timer.intervalId);
  timer.startTime = 0;
  timer.currentTime = 0;
  elapsedTime = 0;
  timer.hrs = 0;
  timer.mins = 0;
  timer.secs = 0;
  timer.timeCounter.textContent = "00:00:00";
});

// Define timeDisplay globally or within a scope accessible to updateTime function

function updateTime() {
  timer.elapsedTime = Date.now() - timer.startTime;

  timer.secs = Math.floor((timer.elapsedTime / 1000) % 60);
  timer.mins = Math.floor((timer.elapsedTime / (1000 * 60)) % 60);
  timer.hrs = Math.floor((timer.elapsedTime / (1000 * 60 * 60)) % 600);

  timer.secs = pad(timer.secs);
  timer.mins = pad(timer.mins);
  timer.hrs = pad(timer.hrs);

  timer.timeCounter.textContent = `${timer.hrs}:${timer.mins}:${timer.secs}`;

  function pad(unit) {
    return ("0" + unit).slice(-2); // simplified padding logic
  }
}
