const $hamburgesa = document.getElementById("hamburgesa"),
  $menuNav = document.getElementById("menu__navegacion"),
  $menuLink = document.querySelector("menu__link"),
  $menu = document.getElementById("button"),
  ls = localStorage;

const activarBoton = (e) => {
  if (e.target === $hamburgesa) {
    $menuNav.classList.toggle("active");
    console.log("fincon");
  }
  if (e.target != $hamburgesa) {
    $menuNav.classList.remove("active");
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
    activarBoton(e);
  });
});

const $themeBtn = document.querySelector(".dark-theme-btn"),
  $selectors = document.querySelectorAll("[data-dark]");

let moon = "🌙",
  sun = "☀️";

const ligthMode = () => {
  $selectors.forEach((el) => el.classList.remove("dark-mode"));
  $themeBtn.textContent = moon;
  ls.setItem("theme", "light");
};

const darkMode = () => {
  $selectors.forEach((el) => el.classList.add("dark-mode"));
  $themeBtn.textContent = sun;
  ls.setItem("theme", "dark");
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".dark-theme-btn")) {
    if ($themeBtn.textContent === moon) {
      darkMode();
    } else {
      ligthMode();
    }
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (ls.getItem("theme") === null) {
    ls.setItem("theme", "light");
  }
  if (ls.getItem("theme") === "light") {
    ligthMode();
  }
  if (ls.getItem("theme") === "dark") {
    darkMode();
  }
});
