import data from "./data.js";
import { createTileTable, updateData, updatePieces } from "./lib.js";
//create tile table to replace console log
createTileTable(data);

const form = document.querySelector("form");
//if (1<=round<=10) {
form.addEventListener(
  "submit",

  // Best practice to explicitly name the parameter instead of using 'global event'
  // https://eslint.org/docs/rules/no-restricted-globals
  (event) => {
    event.preventDefault();

    // Pass form - get back an object of 'updated pieces'
    const updatedPieces = updatePieces(event.target);

    // TODO: Use the 'updatedPieces' info to perform calculations on our new dataset.
    updateData(updatedPieces, data);

    // TODO: Add a 'render' to show 'updatedPieces'
  }
);
