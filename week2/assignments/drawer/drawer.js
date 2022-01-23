const drawerItems = document.querySelectorAll(".drawer-item");

drawerItems.forEach((item) => {
  item.addEventListener("click", () => {
    let selectedItem = document.querySelector(".active-item");
    selectedItem.classList.remove("active-item");
    item.classList.add("active-item");
  });
});
