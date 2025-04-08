const openBtn = document.querySelector(".open-form-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-form-btn");

openBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
