const ref = {
  changeColorBtn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};
ref.changeColorBtn.addEventListener("click", changeColorBtnClick);

function changeColorBtnClick() {
  const currentColor = getRandomHexColor();
  ref.color.textContent = currentColor;
  ref.body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
