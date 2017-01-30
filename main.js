console.log("test")

var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var slot4 = document.getElementById("slot4");
var slot5 = document.getElementById("slot5");
var slot6 = document.getElementById("slot6");
var slot7 = document.getElementById("slot7");
var slot8 = document.getElementById("slot8");
var slot9 = document.getElementById("slot9");

var trackerRick = 0;
var trackerMorty

var Oimg = document.getElementById("imgO");
var Ximg = document.getElementById("imgX");

// var playerRick= {
//   token : "Rick"
//   score : 0
//   scoreBoard : document.get
// }
//
// var playerMorty = {
//
// }


var Turns=0;
for(var i =0; i<9; i++) {
  //somehow tell the computer when a move has been made
  if ()
  Turns++;
}

//at end of game: functionCheckWin
if((slot1 === Oimg || slot1 === Ximg) && (slot2 === Oimg || slot2 === Ximg) && (slot3 === Oimg || slot3 === Ximg) && (slot4 === Oimg || slot4 === Ximg) && (slot5 === Oimg || slot5 === Ximg) && (slot6 === Oimg || slot6 === Ximg) && (slot7 === Oimg || slot7 === Ximg) && (slot8 === Oimg || slot8 === Ximg) && (slot9 === Oimg || slot9 === Ximg)) {
  functionCheckWin();
}

slot1.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot1.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot1.style.backgroundImage = "url('morty.png')";
  }
})

slot2.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot2.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot2.style.backgroundImage = "url('morty.png')";
  }
})

slot3.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot3.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot3.style.backgroundImage = "url('morty.png')";
  }
})

slot4.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot4.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot4.style.backgroundImage = "url('morty.png')";
  }
})

slot5.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot5.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot5.style.backgroundImage = "url('morty.png')";
  }
})

slot6.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot6.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot6.style.backgroundImage = "url('morty.png')";
  }
})

slot7.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot7.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot7.style.backgroundImage = "url('morty.png')";
  }
})

slot8.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot8.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot8.style.backgroundImage = "url('morty.png')";
  }
})

slot9.addEventListener('click', function() {
  if(Turns === 0 || Turns === 2 || Turns === 4 || Turns === 6 || Turns === 8) {
    slot9.style.backgroundImage = "url('rick.png')";
  } else if (Turns === 1 || Turns === 3 || Turns === 5 || Turns === 7) {
    slot9.style.backgroundImage = "url('morty.png')";
  }
})

slot9.style.backgroundImage = "url('rick.png')"
slot9.style.backgroundImage = "url('morty.png')"


//function checkWin () {

//win condition for Player 1
if (slot1.style.backgroundImage = "url('rick.png')" && slot2.style.backgroundImage = "url('rick.png')" && slot3.style.backgroundImage = "url('rick.png')") {
  //win (alert("Player One Wins!"); console.log("Player One Wins!"); functionWin
} else if (slot4.style.backgroundImage = "url('rick.png')" && slot5.style.backgroundImage = "url('rick.png')" && slot6.style.backgroundImage = "url('rick.png')") {

} else if (slot7.style.backgroundImage = "url('rick.png')" && slot8.style.backgroundImage = "url('rick.png')" && slot9.style.backgroundImage = "url('rick.png')") {

} else if (slot1.style.backgroundImage = "url('rick.png')" && slot4.style.backgroundImage = "url('rick.png')" && slot7.style.backgroundImage = "url('rick.png')") {

} else if (slot1 === Oimg && slot5 === Oimg && slot8 === Oimg) {

} else if (slot3 === Oimg && slot6 === Oimg && slot9 === Oimg) {

} else if (slot1 === Oimg && slot5 === Oimg && slot9 === Oimg) {

} else if (slot7 === Oimg && slot5 === Oimg && slot3 === Oimg) {

} else {
  //nobody wins
}


//win condition for Player 2
if (slot1 === Ximg && slot2 === Ximg && slot3 === Ximg) {
  //win (alert("Player Two Wins!"); console.log("Player Two Wins!"); functionWin
} else if (slot4 === Ximg && slot5 === Ximg && slot6 === Ximg) {

} else if (slot7 === Ximg && slot8 === Ximg && slot9 === Ximg) {

} else if (slot1 === Ximg && slot4 === Ximg && slot7 === Ximg) {

} else if (slot2 === Ximg && slot5 === Ximg && slot8 === Ximg) {

} else if (slot3 === Ximg && slot6 === Ximg && slot9 === Ximg) {

} else if (slot1 === Ximg && slot5 === Ximg && slot9 === Ximg) {

} else if (slot7 === Ximg && slot5 === Ximg && slot3 === Ximg) {

} else {
  //nobody wins
}


//CLASS WALKTHROUGH

var winningCombos = [
  [0, 1, 2],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

// function takeTurns() {
//   //alternate between Rick and morty
//   turn++
//   return (turn % 2 ? 'X' : 'O')
// }


//reset button
document.getElementById('resetBoard').addEventListener('click', function() {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundImage = null;
  }
})

//click, event listener: div->img
document.getElementById('box').addEventListener('click', function() {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundImage = null;
    getWinner(this.style.backgroundImage)
  }
})

function getWinner(token) {
  for (var i =0; i < winningCombos.length; i++) {
    if(boxes[winningCombos[i][0]].style.backgroundImage === token && boxes[winningCombos[i][1]].style.backgroundImage === token && boxes[winningCombos[i][2]].style.backgroundImage === token) {
      if (token === player1.token) {
        endGame(player1)
        return
      } else if (token === player2.token) {
        endGame(player2)
        return
      }
    }
  }
  //checkfor tie
  var cellEmpty = false
  for (var i =0; i <boxes.length; i++){
    if (boxes[i].style.backgroundImage = null) {
      cellEmpty = true
    }
  }
  if (!cellEmpty) {
    console.log('It is a tie')
  }
}

function endGame(player) {
  console.log(player.token + ' wins!')
}

function addListeners() {}

function removeListeners() {}

function clearBoard() {}
