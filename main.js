const generateButton = document.getElementById("generate-color");
const colorDiv = document.getElementById("color-div");
const opacityRange = document.getElementById("opacity-range");

generateButton.addEventListener("click", () => {
  const randomColor = `#${Math.random().toString(16).slice(2, 8)}`;
  colorDiv.style.backgroundColor = randomColor;
});
opacityRange.oninput = () => {
  colorDiv.style.opacity = opacityRange.value;
};
