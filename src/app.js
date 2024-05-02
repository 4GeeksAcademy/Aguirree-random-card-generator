import "bootstrap";
import "./style.css";

window.onload = function() {
  let topLeftSuit = document.querySelector(".top-left");
  let bottomRightSuit = document.querySelector(".bottom-right");
  let rank = document.querySelector(".rank");
  let suits = ["♥", "♦", "♠", "♣"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }

  let chosenSuit = suits[getRandomNumber(suits)];
  topLeftSuit.textContent = chosenSuit;
  bottomRightSuit.textContent = chosenSuit;

  rank.textContent = ranks[getRandomNumber(ranks)];

  // Set color based on suit
  if (chosenSuit === "♥" || chosenSuit === "♦") {
    topLeftSuit.style.color = "red";
    bottomRightSuit.style.color = "red";
  } else {
    topLeftSuit.style.color = "black";
    bottomRightSuit.style.color = "black";
  }
};
