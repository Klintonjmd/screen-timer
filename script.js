const passive = document.querySelector("#passive");
const active = document.querySelector("#active");
var buzzer = new Audio("buzzer.wav");

window.onload = beginTimer();

function beginTimer() {
  document.title = "Sceen Timer";
  passive.style.display = "block";
  active.style.display = "none";
  setTimeout(beginBreak, 1200000);
}

function beginBreak() {
  buzzer.play();
  passive.style.display = "none";
  active.style.display = "block";
  setTimeout(beginTimer, 90000);
}
