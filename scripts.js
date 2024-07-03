const colors = [
  "#FFD700",
  "#ADFF2F",
  "#87CEEB",
  "#FFB6C1",
  "#20B2AA",
  "#EEE8AA",
  "#DC143C",
];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColors() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.style.backgroundColor = getRandomColor();
  });
}
