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

  var allDivs = document.querySelectorAll("div div");
  function changing () {
    for (var i = 0; i < allDivs.length; i++) {
      var red = Math.floor(Math.random() * 255 + 1);
      var green = Math.floor(Math.random() * 255 + 1);
      var blue = Math.floor(Math.random() * 255 + 1);
      var tiles = document.createElement("div");
    allDivs[i].style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
  }

  setInterval(changing, 2000);
  var audio = document.createElement("audio");
  audio.setAttribute("src", "nyan.ogg");
  audio.setAttribute("autoplay", "autoplay");
  audio.setAttribute("loop", "loop");
  audio.setAttribute("type", "audio/mp3");
  document.querySelector("body").appendChild(audio);
  