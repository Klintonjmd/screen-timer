const passive = document.querySelector("#passive");
const active = document.querySelector("#active");
let i = 0;
var buzzer = new Audio("buzzer.wav");

window.onload = beginTimer();

function beginTimer() {
  document.title = "Sceen Timer";
  passive.style.display = "block";
  active.style.display = "none";
  setTimeout(beginBreak, 1000);
}

function beginBreak() {
  if (document.visibilityState === "hidden") {
    buzzer.play();
    document.title = "TIME FOR A BREAK";
  }
  if (document.visibilityState === "visible") {
    passive.style.display = "none";
    active.style.display = "block";
    setTimeout(beginTimer, 1000);
  }
}
