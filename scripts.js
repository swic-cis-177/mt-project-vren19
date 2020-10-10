//set starting number of each tile
const tileNumber = [12, 12, 12, 12, 12, 12, 12, 12, 12];
const roundNumber = document.querySelector("title");
const form = document.querySelector("form");
let round = 1;
while (round <= 8) {
  form.addEventListener("submit", function () {
    //prevent default browser permission
    event.preventDefault();

    //action when submit button is clicked.
    const formData = {};
    for (let i = 0; i <= 8; i++) {
      //print amount of each tile pulled
      formData[event.target.elements[i].id] = event.target.elements[i];
      let tilesPulled = event.target.elements[i].value;

      console.log(
        "The number of " +
          event.target.elements[i].id +
          "s pulled: " +
          event.target.elements[i].value
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
    roundNumber.textContent = "Round Number" + round;
  });
  roundNumber.TextContent = "GAME OVER.";
}
