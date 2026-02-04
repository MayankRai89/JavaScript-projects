var teams = [
  {
    team: "csk",
    captain: "ms dhoni",
    location: "chennai",
    primaryColor: "yellow",
    secondaryColor: "blue",
  },
  {
    team: "mi",
    captain: "rohit sharma",
    location: "mumbai",
    primaryColor: "blue",
    secondaryColor: "skyblue",
  },
  {
    team: "rcb",
    captain: "virat kohli",
    location: "bangalore",
    primaryColor: "red",
    secondaryColor: "black",
  },
  {
    team: "kxip",
    captain: "kl rahul",
    location: "punjab",
    primaryColor: "red",
    secondaryColor: "silver",
  },
  {
    team: "srh",
    captain: "warner",
    location: "hyderabad",
    primaryColor: "orange",
    secondaryColor: "black",
  },
];

var main = document.querySelector(".main");
var btn = document.getElementById("myButton");
var h1 = document.querySelector(".main h1");

h1.textContent = "Click the button to see a random IPL team";

btn.addEventListener("click", () => {
  var randomIndex = Math.floor(Math.random() * teams.length);
  var team = teams[randomIndex];

  h1.innerHTML = `
    TEAM: ${team.team.toUpperCase()} <br>
    CAPTAIN: ${team.captain.toUpperCase()} <br>
    CITY: ${team.location.toUpperCase()}`;

  main.style.backgroundColor = team.primaryColor;
  h1.style.color = team.secondaryColor;
});
