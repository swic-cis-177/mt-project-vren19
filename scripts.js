//set starting number of each tile
const tileNumber = [12, 12, 12, 12, 12, 12, 12, 12, 12];
const roundNumber = document.querySelector("title");
const form = document.querySelector("form");
let round = 1;
let text = "Round 1";
//if (1<=round<=10) {
form.addEventListener("submit", function () {
  //prevent default browser permission
  event.preventDefault();
  //action when submit button is clicked.
  if (round < 10) {
    const formData = {};
    for (let i = 0; i <= 8; i++) {
      //print amount of each tile pulled
      formData[event.target.elements[i].id] = event.target.elements[i];
      let tilesPulled = event.target.elements[i].value;
      console.log(
        "The number of " +
          event.target.elements[i].id +
          "s pulled: " +
          tilesPulled
      );
      //print the amount of each tile left
      tileNumber[i] = tileNumber[i] - tilesPulled;

      console.log(
        "The number of " +
          event.target.elements[i].id +
          "s left: " +
          tileNumber[i]
      );
    }
    round++;
    text = "Round " + round;
    console.log(round);
    document.getElementById("round").innerHTML = text;
  } else {
    console.log("Game Over.");
    document.getElementById("round").innerHTML = "Game Over";
  }
  //TODO: reset number boxes
});
