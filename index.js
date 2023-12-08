console.log("dom ar aj spacile day");
function makeRed() {
  document.body.style.backgroundColor = "red";
}
const makeBlueButton = document.getElementById("makeBlueButton");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const makePink = document.getElementById("makePink");
makePink.addEventListener("click", pink);
function pink() {
  document.body.style.backgroundColor = "pink";
}

const makeGreen = document.getElementById("makeGreen");
makeGreen.addEventListener("click", function green() {
  document.body.style.backgroundColor = "green";
});

document.getElementById(
  "MakeGoldenRod",
  addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenRod";
  })
);
