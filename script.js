console.log("welcome to tic tac toe");

let start = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3");
let over = new Audio("gameover.mp3");

let turn = "X";
let isWin = false;
let c = 0;
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function for checking the turn
const changeTurn = () => {
  if (turn == "X") {
    turn = "0";
  } else {
    turn = "X";
  }
};

// Function for checking the winner

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxContent");
  winner.forEach((element) => {
    if (
      boxText[element[0]].innerText === boxText[element[1]].innerText &&
      boxText[element[1]].innerText === boxText[element[2]].innerText &&
      boxText[element[0]].innerText != ""
    ) {
      let innerTxt = boxText[element[0]].innerText;

      innerTxt === "X"
        ? (document.getElementById("info2").style.color = "greenYellow")
        : (document.getElementById("info2").style.color = "red");

      document.querySelector("#info").innerText = "Winner is ";
      document.querySelector("#info2").innerText = innerTxt;
      
      var mq = window.matchMedia("(max-width: 450px)");
      if (mq.matches) {

        idArray.forEach((e) => {
          document.getElementById(`${e}`).style.fontSize = "5.5vw";
        });

        boxText[element[0]].style.animation =
        "incWidth2 1s infinite alternate,decWidth2 1s infinite alternate ";
      boxText[element[1]].style.animation =
        "incWidth2 1s infinite alternate,decWidth2 1s infinite alternate ";
      boxText[element[2]].style.animation =
        "incWidth2 1s infinite alternate,decWidth2 1s infinite alternate ";
  
      } else {
        boxText[element[0]].style.animation =
        "incWidth 1s infinite alternate,decWidth 1s infinite alternate ";
      boxText[element[1]].style.animation =
        "incWidth 1s infinite alternate,decWidth 1s infinite alternate ";
      boxText[element[2]].style.animation =
        "incWidth 1s infinite alternate,decWidth 1s infinite alternate ";

      idArray.forEach((e) => {
        document.getElementById(`${e}`).style.fontSize = "3.5vw";
      });

      }
      

      idArray.forEach((e) => {
        document.getElementById(`${e}`).style.pointerEvents = "none";
      });
      // over.play();
      isWin = true;
    } else if (!isWin && c == 9) {
      document.querySelector("#info").innerText = "Match is a tie";
      document.querySelector("#info2").innerText = "";
      idArray.forEach((e) => {
        document.getElementById(`${e}`).style.pointerEvents = "none";
      });
      // over.play();
    }
  });
};

// Function for game logic

let box = Array.from(document.getElementsByClassName("box"));

box.forEach((element) => {
  element.addEventListener("click", () => {
    let boxContent = element.querySelector(".boxContent");
    // start.play();
    if (boxContent.innerText === "") {
      // turnAudio.play();
      boxContent.innerText = turn;
      if (turn == "X") {
        boxContent.style.color = "greenYellow";
      } else {
        boxContent.style.color = "red";
      }
      boxContent.innerText = turn;
      changeTurn();

      if (turn == "X") {
        document.getElementById("info2").innerText = turn;
        document.getElementById("info2").style.color = "greenYellow";
      } else {
        document.getElementById("info2").innerText = turn;
        document.getElementById("info2").style.color = "red";
      }
      c = c + 1;
      checkWin();
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("info").innerText = "Turn for ";
  document.getElementById("info2").innerText = "X";
  document.getElementById("info2").style.color = "greenYellow";
  turn = "X";
  c = 0;
  isWin = false;
  box.forEach((element) => {
    let boxContent = element.querySelector(".boxContent");
    boxContent.innerText = "";
    var mq = window.matchMedia("(max-width: 450px)");
    if (mq.matches) {
      idArray.forEach((e) => {
        document.getElementById(`${e}`).style.pointerEvents = "all";
        document.getElementById(`${e}`).style.fontSize = "9vw";
      });
    }
    else{
      idArray.forEach((e) => {
        document.getElementById(`${e}`).style.pointerEvents = "all";
        document.getElementById(`${e}`).style.fontSize = "5vw";
      });
    }
    
    let boxText = document.getElementsByClassName("boxContent");
    winner.forEach((element) => {
      boxText[element[0]].style.animation = "none";
      boxText[element[1]].style.animation = "none";
      boxText[element[2]].style.animation = "none";
    });
  });
});
