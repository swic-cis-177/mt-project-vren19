import data from "./data.js";
import { createTileTable, endOfRound } from "./lib.js";
//create tile table to replace console log
createTileTable(data);

const form = document.querySelector("form");
//if (1<=round<=10) {
form.addEventListener("submit", function () {
  //prevent default browser permission
  event.preventDefault();
  //action when submit button is clicked.
  endOfRound();
});
