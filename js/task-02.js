const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newList = document.createElement("li");
// const newListElem = [];
ingredients.forEach((id) => {
  newList.textContent = `${ingredients}`;
  newList.classList.add("item");
  console.log(newList);
});
