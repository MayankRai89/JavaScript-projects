var grow = 0;

var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inner = document.querySelector(".inner");
var h3 = document.querySelector("h3");

function updateTimeRemaining(totalTime, progress) {
  return (((100 - progress) / 100) * totalTime).toFixed(1);
}

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";

  var num = 50 + Math.floor(Math.random() * 50);
  h3.innerHTML = "Time remaining - " + num / 10 + " seconds";

  var totalTime = num / 10;

  var interval = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
   h3.innerHTML =
      "Time remaining - " +
      updateTimeRemaining(totalTime, grow) +
      " seconds";
  }, num);

  setTimeout(() => {
    clearInterval(interval);
    btn.innerHTML = "Download Complete";
    btn.style.opacity = "0.5";
    console.log("Downloaded in ", num / 10, " seconds");
  }, num * 100);
});
