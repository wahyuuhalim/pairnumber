var containerGame = document.getElementById("container-game");

var boardSetting = [];

var jumlahBaris = 4;
var jumlahKolom = 4;

function generateBoardSetting() {
  //var randomArray = generateRandomArray()

  //Buat array 2 dimensi yang isinya objek
  for (var i = 0; i < jumlahBaris; i++) {
    var arrBaris = [];

    for (var j = 0; j < jumlahKolom; j++) {
      var isiBox = {
        value: (i + j),
        isOpened: false,
        isMatched: false
      }

     arrBaris.push(isiBox);
    }
    
    boardSetting.push(arrBaris);
  }
}

function printBoard() {

  for (var i = 0; i < jumlahBaris; i++) {
    var elBaris = document.createElement('div');
    elBaris.id = 'baris-' + i;
    elBaris.className = "baris-box";

     for (var j = 0; j < jumlahKolom; j++) {
      var elKolom = document.createElement('div');
      elKolom.id = 'baris-' + i + j;
      elKolom.className = 'style-box';
      elKolom.innerHTML = boardSetting[i][j].value;

      elBaris.appendChild(elKolom);
    }

     containerGame.appendChild(elBaris);
  }
}  

generateBoardSetting();
printBoard();

// function generateRandomArray() {
//   //return random array
// }



  

