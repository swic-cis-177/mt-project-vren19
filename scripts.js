const form = document.querySelector("form");

form.addEventListener("submit", function () {
  //prevent default browser permission
  event.preventDefault();

  //print the amount of tiles pulled of each tile.
  const formData = {};
  for (let i = 0; i <= 8; i++) {
    formData[event.target.elements[i].id] = event.target.elements[i];
    console.log(event.target.elements[i].value);
  }
});

/**
 * {Neutron Bomb: event.target.elements[0].value
 * Gauss Shield: event.target.elements[1].value
 * nanorobots: event.target.elements[2].value
 * starbase: event.target.elements[3].value
 * improved hull:event.target.elements[4].value
 * Fusion Drive: event.target.elements[5].value
 * Plasma Cannon: event.target.elements[6].value
 * Fusion Source: event.target.elements[7].value
 * Advanced Robotics: event.target.elements[8].value
 * }
 */
