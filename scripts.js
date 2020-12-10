import data from "./data.js";
import {
  round,
  createTileTable,
  updateDataRound1,
  updatePieces,
  adjustRoundNumber,
  updateDataRound2,
  updatedData,
} from "./lib.js";
//create tile table to replace console log
createTileTable(data);

const form = document.querySelector("form");
form.addEventListener(
  "submit",

  // Best practice to explicitly name the parameter instead of using 'global event'
  // https://eslint.org/docs/rules/no-restricted-globals
  (event) => {
    event.preventDefault();

    // Pass form - get back an object of 'updated pieces'
    const updatedPieces = updatePieces(event.target);

    // TODO: Use the 'updatedPieces' info to perform calculations on our new dataset.
    if (round === 1) {
      // Round 1
      updateDataRound1(updatedPieces, data);
      adjustRoundNumber();
    } else {
      // Rounds 2-10
      updateDataRound2(updatedPieces, updatedData);
      adjustRoundNumber();
    }
  }
);
