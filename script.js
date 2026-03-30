const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.getAttribute("data-value");
    display.value += value;
  });
});
