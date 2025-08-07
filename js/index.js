const button = document.querySelector(".testClick");
const colour = ["red", "blue", "green", "yellow"];
let index = 0;

button.addEventListener("click", function() {
    button.style.backgroundColor = colour[index];
    index = (index + 1) % colour.length;
});

button.addEventListener("click", function() {
    button.style.backgroundColor = "blue";
});