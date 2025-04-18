const button = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-link");

let isFunMode = false;

button.addEventListener("click", () => {
  isFunMode = !isFunMode;

  if (isFunMode) {
    themeLink.href = "fun-mode.css";
    button.textContent = "🧐 Ciddi moda dön";
  } else {
    themeLink.href = "style.css";
    button.textContent = "🎉 Eğlenceli moda geç";
  }
});
