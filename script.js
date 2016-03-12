// Your JS goes here

var container = document.createElement("div");
document.querySelector("body").appendChild(container);
  for (var z = 0; z < 27; z++) {
    var tiles = document.createElement("div");
    if (z % 2 === 0) {
      tiles.style.backgroundColor = "red";
    } else {
      tiles.style.backgroundColor = "green";
    }
    container.appendChild(tiles);
  }
  document.querySelector("div").appendChild(tiles);  