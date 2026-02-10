// var momv = document.querySelector("#box");
addEventListener("mousemove", function (e) {
  console.log(e.clientX, e.clientY);
  this.document.body.style.setProperty("--x", e.clientX + "px");
  this.document.body.style.setProperty("--y", e.clientY + "px");
});
