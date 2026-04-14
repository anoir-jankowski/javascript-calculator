const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// list of allowed operators
const operators = ["+", "-", "*", "/"]

// loop through all buttons
buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    // get value from button
    const value = button.getAttribute("data-value");
    if(value ==="C") {
      display.value = "";
      return;
    }

    if(value === "=") {
      try {
        // eval calculates the math expression in the display
        display.value = eval(display.value);
      } catch (error) {
        display.value= "Error";
      }
      return;
    }
      // gets last character (important for checks)
      const lastChar = display.value.slice(-1);

      // prevent starting with an operator
      if(display.value === "" && operators.includes(value)) {
        return;
    }  

      // prevent double operators
      if (operatots.includes(value) && operators.includes(lastChar)){
        return;
      }
 
     // prevent multiple dots in a number
     if (value === "." && display.value.includes(".")) {
       return;
     }
      display.value += value;
  });
});
