const button = document.querySelector(".testClick");
const button1 = document.querySelector(".testbtn");
const colour = ["red", "blue", "green", "yellow"];
let index = 0;

button.addEventListener("click", function() {
    button.style.backgroundColor = colour[index];
    index = (index + 1) % colour.length;
});

button1.addEventListener("click", function() {
    button1.style.backgroundColor = "red";
});