function setPosition(id, pos) {
  let elem = document.getElementById(id).style;
  if (pos === 1) {
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
    if (String(id).includes("blue")) {
      elem.top = "355px";
      elem.left = "88.25px";
    } else if (String(id).includes("red")) {
      elem.top = "355px";
      elem.left = "623px";
    } else if (String(id).includes("yellow")) {
      elem.top = "623px";
      elem.left = "355px";
    } else if (String(id).includes("green")) {
      elem.top = "88.25px";
      elem.left = "355px";
    }
  } else if (pos === 42) {
    if (String(id).includes("blue")) {
      elem.top = "355px";
      elem.left = "155.px";
    } else if (String(id).includes("red")) {
      elem.top = "355px";
      elem.left = "556px";
    } else if (String(id).includes("yellow")) {
      elem.top = "556px";
      elem.left = "355px";
    } else if (String(id).includes("green")) {
      elem.top = "155.5px";
      elem.left = "355px";
    }
  } else if (pos === 43) {
    if (String(id).includes("blue")) {
      elem.top = "355px";
      elem.left = "221px";
    } else if (String(id).includes("red")) {
      elem.top = "355px";
      elem.left = "489px";
    } else if (String(id).includes("yellow")) {
      elem.top = "489px";
      elem.left = "355px";
    } else if (String(id).includes("green")) {
      elem.top = "221px";
      elem.left = "355px";
    }
  } else if (pos === 44) {
    if (String(id).includes("blue")) {
      elem.top = "355px";
      elem.left = "288px";
    } else if (String(id).includes("red")) {
      elem.top = "355px";
      elem.left = "422px";
    } else if (String(id).includes("yellow")) {
      elem.top = "422px";
      elem.left = "355px";
    } else if (String(id).includes("green")) {
      elem.top = "288px";
      elem.left = "355px";
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
// document.getElementById("blue1").addEventListener("click", (ev) => {
//   let count = 1;
//   setInterval(() => {
//     setPosition("blue1", count);
//     count++;
//   }, 750);
// });
setPosition("yellow1", 44);
