const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

export const updateData = (piecesInfo, originalData) => {
  // Map over data and 'match' the 'id' with the 'name' from the 'form data'
  // Converts the object to string
  const updatedData = originalData.map((d) => {
    const ret = JSON.parse(JSON.stringify(d));

    const updateNumber = Number(piecesInfo[ret.id]);
    ret.bag = ret.bag - updateNumber;
    ret.board = ret.board + updateNumber;
    console.log(piecesInfo, updateNumber, piecesInfo[ret.id]);
    return ret;

    // const updateNumbers = d.find(({id}) => id === d.id)
    // console.log(updateNumbers);
  });

  console.log(updatedData);
};

export const updatePieces = (form) => Object.fromEntries(new FormData(form));

//Turn part of object into number values
//export const objectNumbers = (object) =>

export const createTileTable = (tilesData) => {
  // clear existing table
  tbody.innerHTML = null;
  // destructure each key in the array
  tilesData.forEach(({ id, tile, bag, board }) => {
    // clone the template row (tr)
    const newTileRow = template.content.cloneNode(true);
    // 3 tds in each row
    const newTileTD = newTileRow.querySelectorAll("td");
    newTileTD[0].textContent = tile;
    newTileTD[1].textContent = bag;

    // Assign a data attribute to this 'td' so we can 'reference' it later from the 'form data'
    //newTileTD[1].dataset.id = id
    newTileTD[2].textContent = board;
    tbody.appendChild(newTileRow);
  });
};
