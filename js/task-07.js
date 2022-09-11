const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
// textRef.style.fontSize = ` ${inputRef.value}px`;

const onInputChange = (event) => {
  console.log(event.currentTarget.value);
  textRef.style.fontSize = `${event.currentTarget.value}px`;
};
inputRef.addEventListener("input", onInputChange);
