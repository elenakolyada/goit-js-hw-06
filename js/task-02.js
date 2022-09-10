const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector(`ul`);

const elements = ingredients.map((option) => {
  const newList = document.createElement("li");
  newList.textContent = `${option}`;
  newList.classList.add("item");
  return newList;
});
console.log(elements);

navEl.append(...elements);
