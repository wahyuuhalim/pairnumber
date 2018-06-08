var containerGame = document.getElementById("container-game");

var boardSetting = [];
var langkah = [];
var jumlahBaris = 4;
var jumlahKolom = 4;
var tahanBuka = false;

// -JALANKAN FUNGSI HASIL PENGATURAN BOARD-

function generateBoardSetting() {
  //Buat array 2 dimensi yang isinya objek
  var angka = 8;
  var value = 0;
  var arrMuncul = [0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < jumlahBaris; i++) {
    var arrBaris = [];

    for (var j = 0; j < jumlahKolom; j++) {
      var isiBox = {
        value: (i + j),
        isOpened: false,
        isMatched: false  // berubah jadi true kalau angka di dalam box nya sama
      }

      value = Math.floor(Math.random() * angka) + 1; // 1 - 8 => 2
      arrMuncul[value - 1] = arrMuncul[value - 1] + 1;

      while (arrMuncul[value - 1] > 2) {
        value = Math.floor(Math.random() * angka) + 1; // 6
        arrMuncul[value - 1] = arrMuncul[value - 1] + 1;
      }

      if (arrMuncul[value - 1] <= 2) {
        isiBox.value = value;
      } 

     arrBaris.push(isiBox);
    }
    
    boardSetting.push(arrBaris);
  }
}

generateBoardSetting();

// -JALANKAN FUNGSI CETAK BOARD-

function printBoard() {
  console.log('mulai');
  containerGame.innerHTML = '';

  for (var i = 0; i < jumlahBaris; i++) {
    var elBaris = document.createElement('div');
    elBaris.id = 'baris-' + i;
    elBaris.className = "baris-box";

     for (var j = 0; j < jumlahKolom; j++) {

      var elKolom = document.createElement('div');

      elKolom.id = 'baris-' + i + j;
      elKolom.baris = i;
      elKolom.kolom = j;
      elKolom.className = 'style-box';
      
      elKolom.onclick = function() {
        var barisKlik = this.baris;
        var kolomKlik = this.kolom;
        console.log('ini div ' + barisKlik + kolomKlik);
        openBoard(barisKlik, kolomKlik);
      }

      if (boardSetting[i][j].isOpened === false) {
        elKolom.className = 'open-box';
        elKolom.innerHTML = '?';
      } else if (boardSetting[i][j].isOpened === true) {
        elKolom.innerHTML = boardSetting[i][j].value;
      }

      if (boardSetting[i][j].isOpened === true || tahanBuka === true) {
        elKolom.onclick = '';
      }
       
      elBaris.appendChild(elKolom);
    }

     containerGame.appendChild(elBaris);
  }
}  

printBoard();

// -JALANKAN FUNGSI BUKA BOARD-

function openBoard(baris, kolom) {
  boardSetting[baris][kolom].isOpened = true;

  langkah.push({
    baris: baris, 
    kolom: kolom
  });

    if (langkah.length % 2 === 0) {
      tahanBuka = true;
      cekBox()
    }

  printBoard()
}

// -JALANKAN FUNGSI TUTUP BOARD-

function closeBoard(baris, kolom) {
  boardSetting[baris][kolom].isOpened = false;
}

// -JALANKAN FUNGSI CEK BOX-

function cekBox() {
  lastOne = langkah[langkah.length - 1],
  lastTwo = langkah[langkah.length - 2]

  if (boardSetting[lastOne.baris][lastOne.kolom].value === boardSetting[lastTwo.baris][lastTwo.kolom].value) {
      console.log('match')
      boardSetting[lastOne.baris][lastOne.kolom].isMatched = true;
      boardSetting[lastTwo.kolom][lastTwo.baris].isMatched = true;
      tahanBuka = false;
      printBoard()
  } else {
    setTimeout(function() {
      closeBoard(lastOne.baris, lastOne.kolom);
      closeBoard(lastTwo.baris, lastTwo.kolom);
      langkah.pop();
      langkah.pop ();
      tahanBuka = true;
      printBoard();
    },1000) //tanyakan sama mas wahib
  }
  
  if (langkah.length === 16) {
    alert('you Win');
  }
}

function resetGame() {
  boardSetting = [];
  langkah = [];
  jumlahBaris = 4;
  jumlahKolom = 4;
  tahanBuka = false;
  generateBoardSetting();
  printBoard();
}

 


