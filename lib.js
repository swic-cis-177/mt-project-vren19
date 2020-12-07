const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
let round = 1;
let text = "Round 1";

export const createTileTable = (tilesData) => {
  // clear existing table
  //tbody.innerHTML = null;
  // destructure each key in the array
  tilesData.forEach(({ tile, bag, board }) => {
    // clone the template row (tr)
    const newTileRow = template.content.cloneNode(true);

    // 3 tds in each row
    const newTileTD = newTileRow.querySelectorAll("td");

    newTileTD[0].textContent = tile;
    newTileTD[1].textContent = bag;
    newTileTD[2].textContent = board;
    tbody.appendChild(newTileRow);
  });
};

//TODO COUNT ROUNDS, PULL ARRAY
//Form submission
export const handleSubmit = () => {
  //action when submit button is clicked.
  if (round < 10) {
    const formData = {};
    console.log("Beginning of Round " + round);

    /**
     * TODO{victoria}: Replace this with a fxn. to handle submission
     * You could use 'name' attributes in HTML with 'FormData'
     * https://dev.to/codefinity/handling-form-submissions-ii-35d5
     */
    for (let i = 0; i <= 8; i++) {
      //print amount of each tile pulled
      formData[event.target.elements[i].id] = event.target.elements[i];
      let tilesPulled = event.target.elements[i].value;
      console.log(
        "The number of " +
          event.target.elements[i].id +
          " tile(s) pulled: " +
          tilesPulled
      );

      console.log(
        "The number of " + event.target.elements[i].id + " tile(s) left: "
      );
    }
    console.log("End of Round " + round);
    //progress to next round
    round++;
    text = "Round " + round;

    /**
     * TODO{victoria}: Move this to another fxn. 👆🏾 that will handle the reset
     * in a less imperative way.
     * You could just do `forEach` after `querySelectorAll`
     */
    document.getElementById("round").innerHTML = text;
    //reset values for inputs eventually get more efficient way to do this if it exists.
    document.getElementById("neutronbomb").value = 0;
    document.getElementById("gaussShield").value = 0;
    document.getElementById("nanoRobots").value = 0;
    document.getElementById("starbase").value = 0;
    document.getElementById("improvedHull").value = 0;
    document.getElementById("fusionDrive").value = 0;
    document.getElementById("plasmaCannon").value = 0;
    document.getElementById("fusionSource").value = 0;
    document.getElementById("advancedRobotics").value = 0;
  }
  //End form submission when game is over
  else {
    console.log("Game Over.");
    document.getElementById("round").innerHTML = "Game Over";
  }
};
