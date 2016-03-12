// Your JS goes here

var container = document.createElement("div");
document.querySelector("body").appendChild(container);
  for (var z = 0; z < 27; z++) {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    var tiles = document.createElement("div");
    tiles.style.backgroundColor = `rgb(${red},${green},${blue})`;
    container.appendChild(tiles);
  }
  document.querySelector("div").appendChild(tiles);  