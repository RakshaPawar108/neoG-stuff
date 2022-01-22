const chipInput = document.querySelector(".chip-input");
let allChips = document.querySelectorAll(".dynamic-chip");
const chips = document.querySelector(".dynamic-chips");
// const removeIcon = document.querySelector("i");
let chipsArray = [];

allChips.forEach((chip) => {
  chipsArray.push(chip.innerText);
});

const addChip = (e) => {
  if (e.keyCode === 13 && e.target.value != "") {
    chipsArray.push(chipInput.value);
    let chip = `<div class="chip dynamic-chip">${chipInput.value} <i class="far fa-times-circle"></i></div>`;
    chips.innerHTML += chip;
    chipInput.value = "";
    console.log(chipsArray);
  }
};

chipInput.addEventListener("keydown", addChip);
// removeIcon.addEventListener("click", removeChip);
