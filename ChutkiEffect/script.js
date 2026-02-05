var img = document.querySelector("img");
var txt = document.querySelector("h2 span");
var body = document.body;
img.addEventListener("mouseenter", () => {
  txt.innerHTML = "Door ho jao!🤬🤬🤬🤬";
  body.style.backgroundColor = "red";
});
img.addEventListener("mouseleave", () => {
  txt.innerHTML = "Good ab door hi rehna!!!😤😤😤😤😤";
  body.style.backgroundColor = "#9e8989";
});
