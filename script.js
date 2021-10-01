var dark = true;

function mudaTema() {
  document.body.classList.toggle("dark");
  if (dark) {
    dark = false;
    document.getElementById("tema").innerHTML = "🌙";
  } else {
    dark = true;
    document.getElementById("tema").innerHTML = "☀️";
  }
}
function linkedin() {}

function github() {}