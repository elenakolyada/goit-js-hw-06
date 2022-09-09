const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newList = document.createElement("li");
newList.textContent = `${ingredients[0]}`;
newList.classList.add("item");
console.log(newList);
