// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmarkIcon"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
