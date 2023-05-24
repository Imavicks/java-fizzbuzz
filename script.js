// create a prompt-sync function
const prompt = require('prompt-sync')();
let number = parseInt(prompt("input a number: "));

// create a funtion to perform the operation
function performOperation(){
    // Loop from 1 to the entered number
    for ( i = 1; i <= number; i++) {
    // Check if the current number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check if the current number is divisible by 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check if the current number is divisible by 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Otherwise, print the current number
    else {
      console.log(i);
    }
  }
  resetInput();
}
performOperation();

// create a funtion to reset the input
function resetInput(){
    number = parseInt(prompt("input a number: "));
    performOperation();
}  
resetInput();