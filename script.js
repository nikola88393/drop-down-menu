let menu = document.getElementById("menuList");

document.getElementById("menu").addEventListener("click", () => {
  if (menu.classList.contains("clicked")) {
    menu.classList.remove("clicked");
    console.log(menu.classList.contains("clicked"));
  } else {
    menu.classList.add("clicked");
    console.log(menu.classList.contains("clicked"));
  }
});
