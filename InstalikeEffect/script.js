var img = document.querySelector("img");
var love = document.querySelector("#heart");

img.addEventListener("dblclick", function () {
  console.log("clicked");
  love.style.opacity = "1";

  love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(function () {
    love.style.transform = "translate(-50%, -300%) scale(2) rotate(60deg)";
  }, 400);

  setTimeout(function () {
    love.style.opacity = "0";
  }, 1000);

  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)";
  }, 1200);
});
