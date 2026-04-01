const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.getAttribute("data-value");

    if(value === "=") {
      try {
        //eval calculates the math expression in the display
        display.value = eval(display.value);
      } catch (error) {
        display.value= "Error";
      }
    } else {
      display.value += value;
    }
  });
});
