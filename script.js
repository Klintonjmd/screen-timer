const passive = document.querySelector("#passive");
const active = document.querySelector("#active");

window.onload = beginTimer();

function beginTimer() {
  passive.style.display = "block";
  active.style.display = "none";
  //setTimeout(beginBreak, 5000);
}

// function beginBreak() {
//   console.log("beginBreak");
//   passive.style.display = "none";
//   active.style.display = "block";
//   setTimeout(beginTimer, 5000);
// }
