function enter() {
  let number = document.getElementById("numberInput").value; // Get input value

  let square = number * number; // Sqauring the given number

  // Displaying the output
  document.getElementById(
    "output"
  ).innerHTML = `<h1>The square of ${number} is ${square}</h1>`;
}
