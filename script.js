// Your JS goes here

var container = document.createElement("div");
document.querySelector("body").appendChild(container);
  var cellCount = 81;
  var value = 255;
  var step = 1/(cellCount / 9);
  var opacity = 1;
  for (var z = 1; z < cellCount + 1; z++) {
    var tiles = document.createElement("div");
      if (z % 2 === 0) {
        tiles.style.background = `rgba(255,0,0,${opacity})`;
      } else {
        tiles.style.background = `rgba(0,0,255,${opacity})`;
      }
    container.appendChild(tiles);
    if (z % 9 === 0)
    {
      opacity = opacity - step;
    }
  }
  document.querySelector("div").appendChild(tiles);  