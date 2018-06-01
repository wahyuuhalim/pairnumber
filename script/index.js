var containerBox = document.getElementById("container-box");

for (var i = 0; i < 10; i++) {
  var elDiv = document.createElement('div');
  elDiv.className = "style-box";

  containerBox.appendChild(elDiv);

  var elDiv = document.createElement('div');
  elDiv.className = "style-box";

  containerBox.appendChild(elDiv);
}

var h2 = document.getElementsByTagName('h2');
h2.style.textAlign = "center";