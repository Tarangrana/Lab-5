function enter() {
  let input = document.getElementById("numberInput").value; // Get input value
  let number = parseFloat(input); // Convert input to number

  let outputDiv = document.getElementById("output"); // Get the output div

  if (!isNaN(number)) {
    let square = number * number;

    // Create or update the h1 element
    outputDiv.innerHTML = `<h1>The square of ${number} is ${square}</h1>`; // Display result in bold h1
  } else {
    outputDiv.innerHTML = `<h1 style="color: red;">Please enter a valid number.</h1>`; // Error message in red
  }
}
