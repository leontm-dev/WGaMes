var current = "b";
var zug = 1;
const blue1 = document.getElementById("blue1");
const blue2 = document.getElementById("blue2");
const blue3 = document.getElementById("blue3");
const blue4 = document.getElementById("blue4");
const green1 = document.getElementById("green1");
const green2 = document.getElementById("green2");
const green3 = document.getElementById("green3");
const green4 = document.getElementById("green4");
const red1 = document.getElementById("red1");
const red2 = document.getElementById("red2");
const red3 = document.getElementById("red3");
const red4 = document.getElementById("red4");
const yellow1 = document.getElementById("yellow1");
const yellow2 = document.getElementById("yellow2");
const yellow3 = document.getElementById("yellow3");
const yellow4 = document.getElementById("yellow4");
function changeCurrent() {
  if (current === "b") {
    current = "g";
  } else if (current === "g") {
    current = "r";
  } else if (current === "r") {
    current = "y";
  } else if (current === "y") {
    current = "b";
  }
}
function würfeln(elem) {
  let number = String(elem.id)
    .replace("1", "")
    .replace("2", "")
    .replace("3", "")
    .replace("4", "");
  let color = String(elem.id)
    .replace("blue", "")
    .replace("yellow", "")
    .replace("red", "")
    .replace("green", "");
  document.getElementById("dice1").classList.add("hideElement");
  document.getElementById("dice2").classList.add("hideElement");
  document.getElementById("dice3").classList.add("hideElement");
  document.getElementById("dice4").classList.add("hideElement");
  document.getElementById("dice5").classList.add("hideElement");
  document.getElementById("dice6").classList.add("hideElement");
  document.getElementById("avaibled1").classList.add("hideElement");
  document.getElementById("avaibled2").classList.add("hideElement");
  document.getElementById("avaibled3").classList.add("hideElement");
  document.getElementById("avaibled4").classList.add("hideElement");
  let random = Math.floor(Math.random() * 6);
  document.getElementById("dice" + random).classList.remove("hideElement");
  if (random === 6) {
    if (elem.title < 0) {
      if (eins != 0 && zwei != 0 && drei === 0 && vier === 0) {
        setPosition(elem.id, 0);
      }
    }
    würfeln(elem);
  }
  let neu = parseInt(elem.title) + random;
  if (neu > 44) {
  }
  let eins = document.getElementById(color + 1).title;
  let zwei = document.getElementById(color + 2).title;
  let drei = document.getElementById(color + 3).title;
  let vier = document.getElementById(color + 4).title;
  if (neu != eins || neu != zwei || neu != drei || neu != vier) {
    setPosition("avaibled" + number, parseInt(elem.title) + random);
    document
      .getElementById("avaibled" + number)
      .classList.remove("hideElement");
    document
      .getElementById("avaibled" + number)
      .addEventListener("click", (ev) => {
        setPosition(elem.id, parseInt(elem.title) + random);
        document.getElementById(elem.id).title = parseInt(elem.title) + random;
        document
          .getElementById("avaibled" + number)
          .classList.add("hideElement");
      });
  }
  return random;
}
function setPosition(id, pos) {
  let elem = document.getElementById(id).style;
  if (String(id).includes("blue")) {
    if (pos === -1) {
      elem.top = "88px";
      elem.left = "88px";
    } else if (pos === -2) {
      elem.top = "88px";
      elem.left = "21px";
    } else if (pos === -3) {
      elem.top = "21px";
      elem.left = "88px";
    } else if (pos === -4) {
      elem.top = "21px";
      elem.left = "21px";
    } else if (pos === 1) {
      elem.top = "288px";
      elem.left = "21px";
    } else if (pos === 2) {
      elem.top = "288px";
      elem.left = "88.25px";
    } else if (pos === 3) {
      elem.top = "288px";
      elem.left = "155.5px";
    } else if (pos === 4) {
      elem.top = "288px";
      elem.left = "221px";
    } else if (pos === 5) {
      elem.top = "288px";
      elem.left = "288px";
    } else if (pos === 6) {
      elem.top = "221px";
      elem.left = "288px";
    } else if (pos === 7) {
      elem.top = "155.5px";
      elem.left = "288px";
    } else if (pos === 8) {
      elem.top = "88.25px";
      elem.left = "288px";
    } else if (pos === 9) {
      elem.top = "21px";
      elem.left = "288px";
    } else if (pos === 10) {
      elem.top = "21px";
      elem.left = "355px";
    } else if (pos === 11) {
      elem.top = "21px";
      elem.left = "422px";
    } else if (pos === 12) {
      elem.top = "88.25px";
      elem.left = "422px";
    } else if (pos === 13) {
      elem.top = "155.5px";
      elem.left = "422px";
    } else if (pos === 14) {
      elem.top = "221px";
      elem.left = "422px";
    } else if (pos === 15) {
      elem.top = "288px";
      elem.left = "422px";
    } else if (pos === 16) {
      elem.top = "288px";
      elem.left = "489px";
    } else if (pos === 17) {
      elem.top = "288px";
      elem.left = "556px";
    } else if (pos === 18) {
      elem.top = "288px";
      elem.left = "623px";
    } else if (pos === 19) {
      elem.top = "288px";
      elem.left = "690px";
    } else if (pos === 20) {
      elem.top = "355px";
      elem.left = "690px";
    } else if (pos === 21) {
      elem.top = "422px";
      elem.left = "690px";
    } else if (pos === 22) {
      elem.top = "422px";
      elem.left = "623px";
    } else if (pos === 23) {
      elem.top = "422px";
      elem.left = "556px";
    } else if (pos === 24) {
      elem.top = "422px";
      elem.left = "489px";
    } else if (pos === 25) {
      elem.top = "422px";
      elem.left = "422px";
    } else if (pos === 26) {
      elem.top = "489px";
      elem.left = "422px";
    } else if (pos === 27) {
      elem.top = "556px";
      elem.left = "422px";
    } else if (pos === 28) {
      elem.top = "623px";
      elem.left = "422px";
    } else if (pos === 29) {
      elem.top = "690px";
      elem.left = "422px";
    } else if (pos === 30) {
      elem.top = "690px";
      elem.left = "355px";
    } else if (pos === 31) {
      elem.top = "690px";
      elem.left = "288px";
    } else if (pos === 32) {
      elem.top = "623px";
      elem.left = "288px";
    } else if (pos === 33) {
      elem.top = "556px";
      elem.left = "288px";
    } else if (pos === 34) {
      elem.top = "489px";
      elem.left = "288px";
    } else if (pos === 35) {
      elem.top = "422px";
      elem.left = "288px";
    } else if (pos === 36) {
      elem.top = "422px";
      elem.left = "221px";
    } else if (pos === 37) {
      elem.top = "422px";
      elem.left = "155.5px";
    } else if (pos === 38) {
      elem.top = "422px";
      elem.left = "88.25px";
    } else if (pos === 39) {
      elem.top = "422px";
      elem.left = "21px";
    } else if (pos === 40) {
      elem.top = "355px";
      elem.left = "21px";
    } else if (pos === 41) {
      elem.top = "355px";
      elem.left = "88.25px";
    } else if (pos === 42) {
      elem.top = "355px";
      elem.left = "155.px";
    } else if (pos === 43) {
      elem.top = "355px";
      elem.left = "221px";
    } else if (pos === 44) {
      elem.top = "355px";
      elem.left = "288px";
    }
  } else if (String(id).includes("green")) {
    if (pos === -1) {
      elem.top = "88px";
      elem.right = "88px";
    } else if (pos === -2) {
      elem.top = "88px";
      elem.right = "21px";
    } else if (pos === -3) {
      elem.top = "21px";
      elem.right = "88px";
    } else if (pos === -4) {
      elem.top = "21px";
      elem.right = "21px";
    }
    if (pos === 1) {
      elem.top = "21px";
      elem.left = "422px";
    } else if (pos === 2) {
      elem.top = "88.25px";
      elem.left = "422px";
    } else if (pos === 3) {
      elem.top = "155.5px";
      elem.left = "422px";
    } else if (pos === 4) {
      elem.top = "221px";
      elem.left = "422px";
    } else if (pos === 5) {
      elem.top = "288px";
      elem.left = "422px";
    } else if (pos === 6) {
      elem.top = "288px";
      elem.left = "489px";
    } else if (pos === 7) {
      elem.top = "288px";
      elem.left = "556px";
    } else if (pos === 8) {
      elem.top = "288px";
      elem.left = "623px";
    } else if (pos === 9) {
      elem.top = "288px";
      elem.left = "690px";
    } else if (pos === 10) {
      elem.top = "355px";
      elem.left = "690px";
    } else if (pos === 11) {
      elem.top = "422px";
      elem.left = "690px";
    } else if (pos === 12) {
      elem.top = "422px";
      elem.left = "623px";
    } else if (pos === 13) {
      elem.top = "422px";
      elem.left = "556px";
    } else if (pos === 14) {
      elem.top = "422px";
      elem.left = "489px";
    } else if (pos === 15) {
      elem.top = "422px";
      elem.left = "422px";
    } else if (pos === 16) {
      elem.top = "489px";
      elem.left = "422px";
    } else if (pos === 17) {
      elem.top = "556px";
      elem.left = "422px";
    } else if (pos === 18) {
      elem.top = "623px";
      elem.left = "422px";
    } else if (pos === 19) {
      elem.top = "690px";
      elem.left = "422px";
    } else if (pos === 20) {
      elem.top = "690px";
      elem.left = "355px";
    } else if (pos === 21) {
      elem.top = "690px";
      elem.left = "288px";
    } else if (pos === 22) {
      elem.top = "623px";
      elem.left = "288px";
    } else if (pos === 23) {
      elem.top = "556px";
      elem.left = "288px";
    } else if (pos === 24) {
      elem.top = "489px";
      elem.left = "288px";
    } else if (pos === 25) {
      elem.top = "422px";
      elem.left = "288px";
    } else if (pos === 26) {
      elem.top = "422px";
      elem.left = "221px";
    } else if (pos === 27) {
      elem.top = "422px";
      elem.left = "155.5px";
    } else if (pos === 28) {
      elem.top = "422px";
      elem.left = "88.25px";
    } else if (pos === 29) {
      elem.top = "422px";
      elem.left = "21px";
    } else if (pos === 30) {
      elem.top = "355px";
      elem.left = "21px";
    } else if (pos === 31) {
      elem.top = "288px";
      elem.left = "21px";
    } else if (pos === 32) {
      elem.top = "288px";
      elem.left = "88.25px";
    } else if (pos === 33) {
      elem.top = "288px";
      elem.left = "155.5px";
    } else if (pos === 34) {
      elem.top = "288px";
      elem.left = "221px";
    } else if (pos === 35) {
      elem.top = "288px";
      elem.left = "288px";
    } else if (pos === 36) {
      elem.top = "221px";
      elem.left = "288px";
    } else if (pos === 37) {
      elem.top = "155.5px";
      elem.left = "288px";
    } else if (pos === 38) {
      elem.top = "88.25px";
      elem.left = "288px";
    } else if (pos === 39) {
      elem.top = "21px";
      elem.left = "288px";
    } else if (pos === 40) {
      elem.top = "21px";
      elem.left = "355px";
    } else if (pos === 41) {
      elem.top = "88.25px";
      elem.left = "355px";
    } else if (pos === 42) {
      elem.top = "155.5px";
      elem.left = "355px";
    } else if (pos === 43) {
      elem.top = "221px";
      elem.left = "355px";
    } else if (pos === 44) {
      elem.top = "288px";
      elem.left = "355px";
    }
  } else if (String(id).includes("red")) {
    if (pos === -1) {
      elem.bottom = "88px";
      elem.right = "88px";
    } else if (pos === -2) {
      elem.bottom = "88px";
      elem.right = "21px";
    } else if (pos === -3) {
      elem.bottom = "21px";
      elem.right = "88px";
    } else if (pos === -4) {
      elem.bottom = "21px";
      elem.right = "21px";
    }
    if (pos === 1) {
      elem.top = "422px";
      elem.left = "690px";
    } else if (pos === 2) {
      elem.top = "422px";
      elem.left = "623px";
    } else if (pos === 3) {
      elem.top = "422px";
      elem.left = "556px";
    } else if (pos === 4) {
      elem.top = "422px";
      elem.left = "489px";
    } else if (pos === 5) {
      elem.top = "422px";
      elem.left = "422px";
    } else if (pos === 6) {
      elem.top = "489px";
      elem.left = "422px";
    } else if (pos === 7) {
      elem.top = "556px";
      elem.left = "422px";
    } else if (pos === 8) {
      elem.top = "623px";
      elem.left = "422px";
    } else if (pos === 9) {
      elem.top = "690px";
      elem.left = "422px";
    } else if (pos === 10) {
      elem.top = "690px";
      elem.left = "355px";
    } else if (pos === 11) {
      elem.top = "690px";
      elem.left = "288px";
    } else if (pos === 12) {
      elem.top = "623px";
      elem.left = "288px";
    } else if (pos === 13) {
      elem.top = "556px";
      elem.left = "288px";
    } else if (pos === 14) {
      elem.top = "489px";
      elem.left = "288px";
    } else if (pos === 15) {
      elem.top = "422px";
      elem.left = "288px";
    } else if (pos === 16) {
      elem.top = "422px";
      elem.left = "221px";
    } else if (pos === 17) {
      elem.top = "422px";
      elem.left = "155.5px";
    } else if (pos === 18) {
      elem.top = "422px";
      elem.left = "88.25px";
    } else if (pos === 19) {
      elem.top = "422px";
      elem.left = "21px";
    } else if (pos === 20) {
      elem.top = "355px";
      elem.left = "21px";
    } else if (pos === 21) {
      elem.top = "288px";
      elem.left = "21px";
    } else if (pos === 22) {
      elem.top = "288px";
      elem.left = "88.25px";
    } else if (pos === 23) {
      elem.top = "288px";
      elem.left = "155.5px";
    } else if (pos === 24) {
      elem.top = "288px";
      elem.left = "221px";
    } else if (pos === 25) {
      elem.top = "288px";
      elem.left = "288px";
    } else if (pos === 26) {
      elem.top = "221px";
      elem.left = "288px";
    } else if (pos === 27) {
      elem.top = "155.5px";
      elem.left = "288px";
    } else if (pos === 28) {
      elem.top = "88.25px";
      elem.left = "288px";
    } else if (pos === 29) {
      elem.top = "21px";
      elem.left = "288px";
    } else if (pos === 30) {
      elem.top = "21px";
      elem.left = "355px";
    } else if (pos === 31) {
      elem.top = "21px";
      elem.left = "422px";
    } else if (pos === 32) {
      elem.top = "88.25px";
      elem.left = "422px";
    } else if (pos === 33) {
      elem.top = "155.5px";
      elem.left = "422px";
    } else if (pos === 34) {
      elem.top = "221px";
      elem.left = "422px";
    } else if (pos === 35) {
      elem.top = "288px";
      elem.left = "422px";
    } else if (pos === 36) {
      elem.top = "288px";
      elem.left = "489px";
    } else if (pos === 37) {
      elem.top = "288px";
      elem.left = "556px";
    } else if (pos === 38) {
      elem.top = "288px";
      elem.left = "623px";
    } else if (pos === 39) {
      elem.top = "288px";
      elem.left = "690px";
    } else if (pos === 40) {
      elem.top = "355px";
      elem.left = "690px";
    } else if (pos === 41) {
      elem.top = "355px";
      elem.left = "623px";
    } else if (pos === 42) {
      elem.top = "355px";
      elem.left = "556px";
    } else if (pos === 43) {
      elem.top = "355px";
      elem.left = "489px";
    } else if (pos === 44) {
      elem.top = "355px";
      elem.left = "422px";
    }
  } else if (String(id).includes("yellow")) {
    if (pos === -1) {
      elem.bottom = "88px";
      elem.left = "88px";
    } else if (pos === -2) {
      elem.bottom = "88px";
      elem.left = "21px";
    } else if (pos === -3) {
      elem.bottom = "21px";
      elem.left = "88px";
    } else if (pos === -4) {
      elem.bottom = "21px";
      elem.left = "21px";
    }
    if (pos === 1) {
      elem.top = "690px";
      elem.left = "288px";
    } else if (pos === 2) {
      elem.top = "623px";
      elem.left = "288px";
    } else if (pos === 3) {
      elem.top = "556px";
      elem.left = "288px";
    } else if (pos === 4) {
      elem.top = "489px";
      elem.left = "288px";
    } else if (pos === 5) {
      elem.top = "422px";
      elem.left = "288px";
    } else if (pos === 6) {
      elem.top = "422px";
      elem.left = "221px";
    } else if (pos === 7) {
      elem.top = "422px";
      elem.left = "155.5px";
    } else if (pos === 8) {
      elem.top = "422px";
      elem.left = "88.25px";
    } else if (pos === 9) {
      elem.top = "422px";
      elem.left = "21px";
    } else if (pos === 10) {
      elem.top = "355px";
      elem.left = "21px";
    } else if (pos === 11) {
      elem.top = "288px";
      elem.left = "21px";
    } else if (pos === 12) {
      elem.top = "288px";
      elem.left = "88.25px";
    } else if (pos === 13) {
      elem.top = "288px";
      elem.left = "155.5px";
    } else if (pos === 14) {
      elem.top = "288px";
      elem.left = "221px";
    } else if (pos === 15) {
      elem.top = "288px";
      elem.left = "288px";
    } else if (pos === 16) {
      elem.top = "221px";
      elem.left = "288px";
    } else if (pos === 17) {
      elem.top = "155.5px";
      elem.left = "288px";
    } else if (pos === 18) {
      elem.top = "88.25px";
      elem.left = "288px";
    } else if (pos === 19) {
      elem.top = "21px";
      elem.left = "288px";
    } else if (pos === 20) {
      elem.top = "21px";
      elem.left = "355px";
    } else if (pos === 21) {
      elem.top = "21px";
      elem.left = "422px";
    } else if (pos === 22) {
      elem.top = "88.25px";
      elem.left = "422px";
    } else if (pos === 23) {
      elem.top = "155.5px";
      elem.left = "422px";
    } else if (pos === 24) {
      elem.top = "221px";
      elem.left = "422px";
    } else if (pos === 25) {
      elem.top = "288px";
      elem.left = "422px";
    } else if (pos === 26) {
      elem.top = "288px";
      elem.left = "489px";
    } else if (pos === 27) {
      elem.top = "288px";
      elem.left = "556px";
    } else if (pos === 28) {
      elem.top = "288px";
      elem.left = "623px";
    } else if (pos === 29) {
      elem.top = "288px";
      elem.left = "690px";
    } else if (pos === 30) {
      elem.top = "355px";
      elem.left = "690px";
    } else if (pos === 31) {
      elem.top = "422px";
      elem.left = "690px";
    } else if (pos === 32) {
      elem.top = "422px";
      elem.left = "623px";
    } else if (pos === 33) {
      elem.top = "422px";
      elem.left = "556px";
    } else if (pos === 34) {
      elem.top = "422px";
      elem.left = "489px";
    } else if (pos === 35) {
      elem.top = "422px";
      elem.left = "422px";
    } else if (pos === 36) {
      elem.top = "489px";
      elem.left = "422px";
    } else if (pos === 37) {
      elem.top = "556px";
      elem.left = "422px";
    } else if (pos === 38) {
      elem.top = "623px";
      elem.left = "422px";
    } else if (pos === 39) {
      elem.top = "690px";
      elem.left = "422px";
    } else if (pos === 40) {
      elem.top = "690px";
      elem.left = "355px";
    } else if (pos === 41) {
      elem.top = "623px";
      elem.left = "355px";
    } else if (pos === 42) {
      elem.top = "556px";
      elem.left = "355px";
    } else if (pos === 43) {
      elem.top = "489px";
      elem.left = "355px";
    } else if (pos === 44) {
      elem.top = "422px";
      elem.left = "355px";
    }
  } else if (String(id).includes("avaibled")) {
    if (pos === -1) {
      elem.top = "88px";
      elem.left = "88px";
    } else if (pos === -2) {
      elem.top = "88px";
      elem.left = "21px";
    } else if (pos === -3) {
      elem.top = "21px";
      elem.left = "88px";
    } else if (pos === -4) {
      elem.top = "21px";
      elem.left = "21px";
    } else if (pos === 1) {
      elem.top = "288px";
      elem.left = "21px";
    } else if (pos === 2) {
      elem.top = "288px";
      elem.left = "88.25px";
    } else if (pos === 3) {
      elem.top = "288px";
      elem.left = "155.5px";
    } else if (pos === 4) {
      elem.top = "288px";
      elem.left = "221px";
    } else if (pos === 5) {
      elem.top = "288px";
      elem.left = "288px";
    } else if (pos === 6) {
      elem.top = "221px";
      elem.left = "288px";
    } else if (pos === 7) {
      elem.top = "155.5px";
      elem.left = "288px";
    } else if (pos === 8) {
      elem.top = "88.25px";
      elem.left = "288px";
    } else if (pos === 9) {
      elem.top = "21px";
      elem.left = "288px";
    } else if (pos === 10) {
      elem.top = "21px";
      elem.left = "355px";
    } else if (pos === 11) {
      elem.top = "21px";
      elem.left = "422px";
    } else if (pos === 12) {
      elem.top = "88.25px";
      elem.left = "422px";
    } else if (pos === 13) {
      elem.top = "155.5px";
      elem.left = "422px";
    } else if (pos === 14) {
      elem.top = "221px";
      elem.left = "422px";
    } else if (pos === 15) {
      elem.top = "288px";
      elem.left = "422px";
    } else if (pos === 16) {
      elem.top = "288px";
      elem.left = "489px";
    } else if (pos === 17) {
      elem.top = "288px";
      elem.left = "556px";
    } else if (pos === 18) {
      elem.top = "288px";
      elem.left = "623px";
    } else if (pos === 19) {
      elem.top = "288px";
      elem.left = "690px";
    } else if (pos === 20) {
      elem.top = "355px";
      elem.left = "690px";
    } else if (pos === 21) {
      elem.top = "422px";
      elem.left = "690px";
    } else if (pos === 22) {
      elem.top = "422px";
      elem.left = "623px";
    } else if (pos === 23) {
      elem.top = "422px";
      elem.left = "556px";
    } else if (pos === 24) {
      elem.top = "422px";
      elem.left = "489px";
    } else if (pos === 25) {
      elem.top = "422px";
      elem.left = "422px";
    } else if (pos === 26) {
      elem.top = "489px";
      elem.left = "422px";
    } else if (pos === 27) {
      elem.top = "556px";
      elem.left = "422px";
    } else if (pos === 28) {
      elem.top = "623px";
      elem.left = "422px";
    } else if (pos === 29) {
      elem.top = "690px";
      elem.left = "422px";
    } else if (pos === 30) {
      elem.top = "690px";
      elem.left = "355px";
    } else if (pos === 31) {
      elem.top = "690px";
      elem.left = "288px";
    } else if (pos === 32) {
      elem.top = "623px";
      elem.left = "288px";
    } else if (pos === 33) {
      elem.top = "556px";
      elem.left = "288px";
    } else if (pos === 34) {
      elem.top = "489px";
      elem.left = "288px";
    } else if (pos === 35) {
      elem.top = "422px";
      elem.left = "288px";
    } else if (pos === 36) {
      elem.top = "422px";
      elem.left = "221px";
    } else if (pos === 37) {
      elem.top = "422px";
      elem.left = "155.5px";
    } else if (pos === 38) {
      elem.top = "422px";
      elem.left = "88.25px";
    } else if (pos === 39) {
      elem.top = "422px";
      elem.left = "21px";
    } else if (pos === 40) {
      elem.top = "355px";
      elem.left = "21px";
    }
  }
}
document.querySelectorAll("div").forEach((e) => {
  if (e.id.includes("blue")) {
    if (e.id.includes("1")) {
      e.style.top = "88px";
      e.style.left = "88px";
    } else if (e.id.includes("2")) {
      e.style.top = "88px";
      e.style.left = "21px";
    } else if (e.id.includes("3")) {
      e.style.top = "21px";
      e.style.left = "88px";
    } else if (e.id.includes("4")) {
      e.style.top = "21px";
      e.style.left = "21px";
    }
  } else if (e.id.includes("red")) {
    if (e.id.includes("1")) {
      e.style.bottom = "88px";
      e.style.right = "88px";
    } else if (e.id.includes("2")) {
      e.style.bottom = "88px";
      e.style.right = "21px";
    } else if (e.id.includes("3")) {
      e.style.bottom = "21px";
      e.style.right = "88px";
    } else if (e.id.includes("4")) {
      e.style.bottom = "21px";
      e.style.right = "21px";
    }
  } else if (e.id.includes("green")) {
    if (e.id.includes("1")) {
      e.style.top = "88px";
      e.style.right = "88px";
    } else if (e.id.includes("2")) {
      e.style.top = "88px";
      e.style.right = "21px";
    } else if (e.id.includes("3")) {
      e.style.top = "21px";
      e.style.right = "88px";
    } else if (e.id.includes("4")) {
      e.style.top = "21px";
      e.style.right = "21px";
    }
  } else if (e.id.includes("yellow")) {
    if (e.id.includes("1")) {
      e.style.bottom = "88px";
      e.style.left = "88px";
    } else if (e.id.includes("2")) {
      e.style.bottom = "88px";
      e.style.left = "21px";
    } else if (e.id.includes("3")) {
      e.style.bottom = "21px";
      e.style.left = "88px";
    } else if (e.id.includes("4")) {
      e.style.bottom = "21px";
      e.style.left = "21px";
    }
  }
});
window.addEventListener("keydown", (ev) => {
  if (current === "b") {
  } else if (current === "g") {
    color = "green";
  } else if (current === "r") {
    color = "red";
  } else if (current === "y") {
    color = "yellow";
  }
  let color = "";
  let eins = document.getElementById(color + 1).title;
  let zwei = document.getElementById(color + 2).title;
  let drei = document.getElementById(color + 3).title;
  let vier = document.getElementById(color + 4).title;
  if (ev.key === "b") {
    if (current === "b") {
      color = "blue";
      if (eins < 0 || zwei < 0 || drei < 0 || vier < 0) {
        if (würfeln(blue1) != 6) {
          if (würfeln(blue1) != 6) {
            if (würfeln(blue1) != 6) {
              changeCurrent();
            }
          }
        }
      } else {
        würfeln(blue1);
      }
    }
  } else if (ev.key === "g") {
    if (current === "g") {
      color = "green";
      if (eins < 0 || zwei < 0 || drei < 0 || vier < 0) {
        if (würfeln(green1) != 6) {
          if (würfeln(green1) != 6) {
            if (würfeln(green1) != 6) {
              changeCurrent();
            }
          }
        }
      } else {
        würfeln(green1);
      }
    }
  } else if (ev.key === "r") {
    if (current === "r") {
      color = "red";
      if (eins < 0 || zwei < 0 || drei < 0 || vier < 0) {
        if (würfeln(red1) != 6) {
          if (würfeln(red1) != 6) {
            if (würfeln(red1) != 6) {
              changeCurrent();
            }
          }
        }
      } else {
        würfeln(red1);
      }
    }
  } else if (ev.key === "y") {
    if (current === "y") {
      color = "yellow";
      if (eins < 0 || zwei < 0 || drei < 0 || vier < 0) {
        if (würfeln(yellow1) != 6) {
          if (würfeln(yellow1) != 6) {
            if (würfeln(yellow1) != 6) {
              changeCurrent();
            }
          }
        }
      } else {
        würfeln(yellow1);
      }
    }
  }
});
