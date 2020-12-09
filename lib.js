import data from "./data.js";
const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
let round = 1;
//let form = document.getElementById("myForm");
//const myFormData = new FormData();

// empty arrays to begin
let formArray = [];
let bagArray = [];
let boardArray = [];

//create filtered arrays from data
const tileLocation = data.filter(({ bag }) => bag);
const bagTiles = tileLocation.map(({ bag }) => bag);
console.log(bagTiles);

const tileLocation2 = data.filter(({ board }) => board);
const boardTiles = tileLocation2.map(({ board }) => board);
console.log(boardTiles);

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

//pulls data from form to adjust tile count in table
//const adjustTileCount = () => {
/**
 * TODO{victoria}: Replace this with a fxn. to handle submission
 * You could use 'name' attributes in HTML with 'FormData'
 * https://dev.to/codefinity/handling-form-submissions-ii-35d5
 */
const processForm = () => {
  for (let i = 0; i <= 8; i++) {
    //print amount of each tile pulled
    //const formInput = Object.fromEntries(myFormData);
    //console.log(formInput[i].value);
    //myformData[event.target.elements[i].id] = event.target.elements[i];

    // TODO: create new arrays that can be iterated through each round
    let tilesPulled = event.target.elements[i].value;
    console.log(bagTiles[i]);
    let newBagCount = bagTiles[i] - tilesPulled;
    let newBoardCount = boardTiles[i] + tilesPulled;
    formArray.push(tilesPulled);
    bagArray.push(newBagCount);
    boardArray.push(newBoardCount);
    console.log(formArray);
    console.log(bagArray);
    console.log(boardArray);
  }
};

// const resetForm = values(0);
const resetFormValues = () => {
  /* I couldn't figure out just do `forEach` after `querySelectorAll`, below are my attempts
   */

  //document.querySelectorAll("quantity").forEach.value=0;
  //tilePullForm.forEach("value").innerHTML = 0;

  //The code below works, but still not pretty
  document.getElementById("neutronbomb").value = 0;
  document.getElementById("gaussShield").value = 0;
  document.getElementById("nanoRobots").value = 0;
  document.getElementById("starbase").value = 0;
  document.getElementById("improvedHull").value = 0;
  document.getElementById("fusionDrive").value = 0;
  document.getElementById("plasmaCannon").value = 0;
  document.getElementById("fusionSource").value = 0;
  document.getElementById("advancedRobotics").value = 0;

  //clear Array
  formArray = [];
};

//progress to next round
const roundNumber = () => {
  round++;
  document.getElementById("round").innerHTML = "Round " + round;
};

//Form submitted to signal end of round
export const endOfRound = () => {
  //action when submit button is clicked.
  if (round < 10) {
    //const formData = {};
    //TODO: Send to table, not console log
    console.log("Beginning of Round " + round);
    //TODO: adjustTileCount();
    processForm();
    // Reset form
    resetFormValues();
    roundNumber();
  }
  //End form submission when game is over
  else {
    console.log("Game Over.");
    document.getElementById("round").innerHTML = "Game Over";
  }
};
