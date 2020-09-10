const canvas = document.getElementById("draw");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousedown", (event) => {
  console.log(event.offsetX);
})
