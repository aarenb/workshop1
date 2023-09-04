const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 6],
  [2, 4, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

let clickedBoxesX = []
let clickedBoxesO = []
let currentPlayer
let activeGame

function startGame(){
  console.log('started')
  currentPlayer = 'X'
  activeGame = true
}

function isWinner () {
  for (let i = 0; i <= winConditions.length; i++) {
    if (clickedBoxesX.includes(winConditions[i][0]) && clickedBoxesX.includes(winConditions[i][1]) && clickedBoxesX.includes(winConditions[i][2]) ){
      console.log('winner')
      activeGame = false
    }
  }
  
}

function boxClick1() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {
    if (currentPlayer === 'X') {
      document.querySelector("#one").value = "X"
      currentPlayer = 'O'
      clickedBoxesX.push(1)
      console.log(clickedBoxesX)
  
    } else if (currentPlayer === 'O') {
      document.querySelector("#one").value = "O"
      currentPlayer = 'X'
      clickedBoxesO.push(1)
    }
  }

}

function boxClick2() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#two").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(2)
  } else if (currentPlayer === 'O') {
    document.querySelector("#two").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(2)
  }

  }
}

function boxClick3() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#three").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(3)
  } else if (currentPlayer === 'O') {
    document.querySelector("#three").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(3)
  }

  }
}

function boxClick4() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#four").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(4)
  } else if (currentPlayer === 'O') {
    document.querySelector("#four").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(4)
  }
  }
}

function boxClick5() {
  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {
  if (currentPlayer === 'X') {
    document.querySelector("#five").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(5)
  } else if (currentPlayer === 'O') {
    document.querySelector("#five").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(5)
  }
  }
}

function boxClick6() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#six").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(6)
  } else if (currentPlayer === 'O') {
    document.querySelector("#six").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(6)
  }

  }
}

function boxClick7() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#seven").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(7)
  } else if (currentPlayer === 'O') {
    document.querySelector("#seven").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(7)
  }
  }
}

function boxClick8() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#eight").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(8)
  } else if (currentPlayer === 'O') {
    document.querySelector("#eight").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(8)
  }

  }
}

function boxClick9() {

  if (activeGame === true && document.querySelector("#one").value !=='O' && document.querySelector("#one").value !=='X') {

  if (currentPlayer === 'X') {
    document.querySelector("#nine").value = "X"
    currentPlayer = 'O'
    clickedBoxesX.push(9)
  } else if (currentPlayer === 'O') {
    document.querySelector("#nine").value = "O"
    currentPlayer = 'X'
    clickedBoxesO.push(9)
  }

  
}