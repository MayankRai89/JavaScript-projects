var keys = document.querySelectorAll(".key");

keys.forEach((key, index) => {
  var sound = new Audio(`sounds/key${String(index + 1).padStart(2, "0")}.mp3`);
  key.audio = sound;
});

function playSound(key) {
  if (!key) return;

  key.audio.currentTime = 0;
  key.audio.play();

  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 120);
}

keys.forEach((key) => {
  key.addEventListener("mousedown", () => playSound(key));
});

document.addEventListener("keydown", (e) => {
  keys.forEach((key) => {
    if (key.innerText.toLowerCase() === e.key.toLowerCase()) {
      playSound(key);
    }
  });
});
