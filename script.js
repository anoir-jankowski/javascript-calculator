const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// loop through all buttons
buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    // get value from button
    const value = button.getAttribute("data-value");

    if(value === "=") {
      try {
        // eval calculates the math expression in the display
        display.value = eval(display.value);
      } catch (error) {
        display.value= "Error";
      }
    } else if (value=== "C") {
      display.value ="";
      
    } else {
      display.value += value;
    }
  });
});
