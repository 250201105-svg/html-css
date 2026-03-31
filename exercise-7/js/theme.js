const toggleSwitch = document.querySelector(".theme-switch");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function updateIcon(theme) {
  if (theme === "light") {
    toggleSwitch.className = "fa-solid fa-sun";
  } else {
    toggleSwitch.className = "fa-solid fa-moon";
  }
}
function switchTheme(e) {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateIcon("light");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    updateIcon("dark");
  }
}

toggleSwitch.addEventListener("click", switchTheme);
