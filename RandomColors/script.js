var btn = document.querySelector("button");
var main = document.querySelector("main");

// btn.addEventListener("click", function () {
//   var div = document.createElement("div");

//   var x = Math.random() * 100;
//   var y = Math.random() * 100;
//   var r = Math.random() * 360;

//   var c1 = Math.floor(Math.random() * 255);
//   var c2 = Math.floor(Math.random() * 255);
//   var c3 = Math.floor(Math.random() * 255);
//   div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

//   div.style.width = "70px";
//   div.style.height = "70px";
//   // div.style.backgroundColor = "blue";
//   div.style.position = "absolute";
//   div.style.left = x + "%";
//   div.style.top = y + "%";
//   div.style.rotate = r + "deg";

//   main.appendChild(div);

//   //   div.classList.add("box");
//   //   div.style.backgroundColor = getRandomColor();
//   //   main.appendChild(div);

//   // console.log("Button clicked");
// });

var arr = [
  "hello i am mayank",
  "i love coding",
  "javascript is fun",
  "let's create something awesome",
  "random colors are cool",
];
btn.addEventListener("click", function () {
  var h1 = document.createElement("h1");
  var x = Math.random() * 80;
  var y = Math.random() * 80;
  var rot = Math.random() * 360;
  var scl = Math.random() * 3;
  h1.style.position = "absolute";

  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scl;
  main.appendChild(h1);

  h1.innerHTML = arr[Math.floor(Math.random() * arr.length)];

  // console.log(h1);
});
