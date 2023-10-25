/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let card = document.querySelector(".card");
  let rank = document.querySelector(".rank");
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }
  card.classList.add(suits[getRandomNumber(suits)]);
  rank.innerHTML = ranks[getRandomNumber(ranks)];
};
