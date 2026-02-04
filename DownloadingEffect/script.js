var grow = 0;

var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inner = document.querySelector(".inner");
var h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";

  var num = 50 + Math.floor(Math.random() * 50);
  h3.innerHTML = "Time remaining - " + num / 10 + " seconds";
  var interval = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
    remainingTime = (totalTime * (100 - grow)) / 100;
    h3.innerHTML = "Time remaining - " + remainingTime.toFixed(1) + " seconds";
  }, num);

  setTimeout(() => {
    clearInterval(interval);
    btn.innerHTML = "Download Complete";
    btn.style.opacity = "0.5";
    console.log("Downloaded in ", num / 10, " seconds");
  }, num * 100);
});
