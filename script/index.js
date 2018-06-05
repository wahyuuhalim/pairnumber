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
  var angka = 8;
  var value = 0;
  var arrMuncul = [0, 0, 0, 0, 0, 0, 0, 0]

  for (var i = 0; i < jumlahBaris; i++) {
    var elBaris = document.createElement('div');
    elBaris.id = 'baris-' + i;
    elBaris.className = "baris-box";

     for (var j = 0; j < jumlahKolom; j++) {

      var elKolom = document.createElement('div');
      elKolom.id = 'baris-' + i + j;
      elKolom.className = 'style-box';
      
      //kalo angka sudah sama dengan 8 maka angka nya diubah lagi jadi 1
      // if (angka > 8) {
      //   angka = 1;
      // }

      value = Math.floor(Math.random() * angka) + 1; // 1 - 8 => 2
      arrMuncul[value-1] = arrMuncul[value-1] + 1;

      while (arrMuncul[value - 1] > 2) {
        value = Math.floor(Math.random() * angka) + 1; // 6
        arrMuncul[value - 1] = arrMuncul[value - 1] + 1;
      }

      if (arrMuncul[value-1] <= 2) {
        elKolom.innerHTML = value;
      } 
      
      elBaris.appendChild(elKolom);
    }

     containerGame.appendChild(elBaris);
  }

}  

function generateRandomArray() {
  //return random array
  return math.random() * angka;
}

generateBoardSetting();
printBoard();
  

