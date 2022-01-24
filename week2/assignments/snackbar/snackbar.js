const snackbarBaseline = document.querySelector(".btn-action-baseline");
const snackbarLeading = document.querySelector(".btn-action-leading");
const snackbarStacked = document.querySelector(".btn-action-stacked");

snackbarBaseline.addEventListener("click", () => {
  document.querySelector(".snackbar-baseline").classList.remove("hide");
  document.querySelector(".snackbar-leading").classList.add("hide");
  document.querySelector(".snackbar-stacked").classList.add("hide");
});

const closeSnackbarBaseline = document.querySelector(".close-icon-baseline");

closeSnackbarBaseline.addEventListener("click", () => {
  document.querySelector(".snackbar-baseline").classList.add("hide");
});

snackbarLeading.addEventListener("click", () => {
  document.querySelector(".snackbar-baseline").classList.add("hide");
  document.querySelector(".snackbar-leading").classList.remove("hide");
  document.querySelector(".snackbar-stacked").classList.add("hide");
});

const closeSnackbarLeading = document.querySelector(".close-icon-leading");

closeSnackbarLeading.addEventListener("click", () => {
  document.querySelector(".snackbar-leading").classList.add("hide");
});

snackbarStacked.addEventListener("click", () => {
  document.querySelector(".snackbar-baseline").classList.add("hide");
  document.querySelector(".snackbar-leading").classList.add("hide");
  document.querySelector(".snackbar-stacked").classList.remove("hide");
});

const closeSnackbarStacked = document.querySelector(".close-icon-stacked");

closeSnackbarStacked.addEventListener("click", () => {
  document.querySelector(".snackbar-stacked").classList.add("hide");
});
