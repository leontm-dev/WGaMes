// Loading Phase

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideElement");
    document.getElementById("starting").classList.remove("hideElement");
  }, 2000);
});

// StartingPhase

document.getElementById("2players").addEventListener("click", (ev) => {
  document.getElementById("starting").classList.add("hideElement");
  document.getElementById("loader").classList.remove("hideElement");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideElement");
    document.getElementById("games2player").classList.remove("hideElement");
    document.getElementById("tictactoe-card").classList.remove("hideElement");
    document.getElementById("viergewinnt-card").classList.remove("hideElement");
    document.getElementById("exit2").classList.remove("hideElement");
  }, 1000);
});
document.getElementById("4players").addEventListener("click", (ev) => {
  document.getElementById("starting").classList.add("hideElement");
  document.getElementById("loader").classList.remove("hideElement");
  document.getElementById("mädn-card").classList.remove("hideElement");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideElement");
    document.getElementById("games4player").classList.remove("hideElement");
    document.getElementById("exit4").classList.remove("hideElement");
  }, 1000);
});
document.getElementById("exit2").addEventListener("click", (ev) => {
  document.getElementById("games2player").classList.add("hideElement");
  document.getElementById("tictactoe-card").classList.add("hideElement");
  document.getElementById("viergewinnt-card").classList.add("hideElement");
  document.getElementById("exit2").classList.add("hideElement");
  document.getElementById("starting").classList.remove("hideElement");
});
document.getElementById("exit4").addEventListener("click", (ev) => {
  document.getElementById("games4player").classList.add("hideElement");
  document.getElementById("tictactoe-card").classList.add("hideElement");
  document.getElementById("mädn-card").classList.add("hideElement");
  document.getElementById("exit4").classList.add("hideElement");
  document.getElementById("starting").classList.remove("hideElement");
});

// 2PlayerGamesPhase

document.getElementById("tictactoe-card").addEventListener("click", (ev) => {
  document.getElementById("games2player").classList.add("hideElement");
  document.getElementById("tictactoe-card").classList.add("hideElement");
  document.getElementById("viergewinnt-card").classList.add("hideElement");
  document.getElementById("exit2").classList.add("hideElement");
  document.getElementById("loader").classList.remove("hideElement");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideElement");
    document.getElementById("tictactoe").classList.remove("hideElement");
  }, 2000);
});
document.getElementById("viergewinnt-card").addEventListener("click", (ev) => {
  document.getElementById("games2player").classList.add("hideElement");
  document.getElementById("tictactoe-card").classList.add("hideElement");
  document.getElementById("exit2").classList.add("hideElement");
  document.getElementById("viergewinnt-card").classList.add("hideElement");
  document.getElementById("loader").classList.remove("hideElement");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideElement");
    document.getElementById("viergewinnt").classList.remove("hideElement");
  }, 2000);
});

// 4PlayerGamesPhase

document.getElementById("mädn-card").addEventListener("click", (ev) => {
  document.getElementById("games4player").classList.add("hideElement");
  document.getElementById("mädn-card").classList.add("hideElement");
  document.getElementById("exit4").classList.add("hideElement");
  document.getElementById("loader").classList.remove("hideElement");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hideElement");
    document.getElementById("mädn").classList.remove("hideElement");
  }, 2000);
});

// TicTacToe

// Mädn

// VierGewinnt
