const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories:${items.length}`);

itemsRef.forEach((item) => {
  const titleCategory = item.querySelector("h2");
  const quantityItem = item.querySelectorAll("li");
  console.log(`Category: ${titleCategory.textContent}`);
  console.log(`Elements: ${quantityItem.length}`);
});
