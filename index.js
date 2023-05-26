// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmarkIcon"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const cardAnswerButton = document.querySelector('[data-js="cardAnswerButton"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');

cardAnswerButton.addEventListener("click", () => {
  cardAnswerButton.classList.toggle("card__answer--active");
  cardAnswer.classList.toggle("card__answer");

  if (cardAnswerButton.textContent === "Hide answer") {
    cardAnswerButton.textContent = "Show answer";
  } else {
    cardAnswerButton.textContent = "Hide answer";
  }
});
