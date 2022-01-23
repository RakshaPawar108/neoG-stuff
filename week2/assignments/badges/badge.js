const toggleBadge = document.querySelector(".btn-badge-toggle");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  toggleBadge.classList.toggle("hide");
});
