/*
# ========================================================
# = Initialization
# ========================================================
*/

function checkIfNumber(number) {
  if (isNaN(number)) {
    alert("You must enter a number ONLY!");
    return;
  }
}

function reRenderHtml(numbers) {
  const list = document.querySelector("#number-list");
  list.innerHTML = "";
  numbers.map(number => {
    const node = document.createElement("li");
    node.appendChild(document.createTextNode(number));
    list.appendChild(node);
  });
}

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {
  // When the user clicks the append button, append the given number to the list.
  document.querySelector("#append").addEventListener("click", appendToList);

  // When the user clicks the remove button, remove the number at the index given from the list.
  document.querySelector("#remove").addEventListener("click", removeFromList);

  // When the user clicks the clear button, remove all items from the list.
  document.querySelector("#clear").addEventListener("click", clearList);

  // When the user clicks the add button, add the value to each item.
  document.querySelector("#add").addEventListener("click", addToAll);

  // When the user clicks the add button, add the value to each item.
  document
    .querySelector("#subtract")
    .addEventListener("click", subtractFromAll);

  // When the user clicks the multiply button, multiply the value by each item.
  document.querySelector("#multiply").addEventListener("click", multiplyByAll);

  // When the user clicks the divide button, divide the value from each item.
  document.querySelector("#divide").addEventListener("click", divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Get the value we're going to append from the input field.
  let number = document.querySelector("#list-number").value;
  checkIfNumber(number);
  numbers.push(parseInt(number));
  // Append the number to our array.
  // Hint: here (and elsewhere), watch the TYPE of the value above.
  // Research `typeof` operator if you're not sure.

  // Update our html.
  const list = document.querySelector("#number-list");
  var node = document.createElement("li");
  node.appendChild(document.createTextNode(number));
  list.appendChild(node);
}
// Remove from the list.
function removeFromList(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Get the index we'll remove from the input field.
  //   let index = document.querySelector(``).value;

  // Remove the number at that index from the list.
  const list = document.querySelector("#number-list");
  const lastElementPosition = numbers.length - 1;
  list.removeChild(list.childNodes[lastElementPosition]);
  numbers.pop();
  /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

  // Update our html.
}

function clearList(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Clear the array of all values.
  numbers = [];
  // Update our html.
  const list = document.querySelector("#number-list");
  list.innerHTML = "";
}

/*
# ========================================================
# = Math Section
# ========================================================
*/

function addToAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to add.
  let numberToAdd = document.querySelector("#numberForMath").value;
  console.log("THE NUMBER TO ADD: ", numberToAdd);
  checkIfNumber(numberToAdd);
  // Add value to everything on the list.
  numbers = numbers.map(number => number + parseInt(numberToAdd));
  // Update our html.
  console.log("Numbers after addition: ", numbers);
  reRenderHtml(numbers);
}

function subtractFromAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to add.
  let numberToSubtract = document.querySelector("#numberForMath").value;
  checkIfNumber(numberToSubtract);
  // Subtract value to everything on the list.
  numbers = numbers.map(number => number - parseInt(numberToSubtract));
  // Update our html.
  reRenderHtml(numbers);
}

function multiplyByAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to add.
  let numberToMultiply = document.querySelector("#numberForMath").value;
  checkIfNumber(numberToMultiply);
  // Add value to everything on the list.
  numbers = numbers.map(number => number * parseInt(numberToMultiply));
  // Update our html.
  reRenderHtml(numbers);
}

function divideFromAll(event) {
  // Make sure page doesn't reload on button press.
  event.preventDefault();

  // Grab value to add.
  let numberToDivide = document.querySelector("#numberForMath").value;
  checkIfNumber(numberToDivide);
  // Divide value from everything on the list.
  numbers = numbers.map(number => number / parseInt(numberToDivide));
  // Update our html.
  reRenderHtml(numbers);
}

/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
  clearUL();
  for (let i = 0; i < numbers.length; i++) {
    addToUL(numbers[i]);
  }
}

function clearUL() {
  const ul = document.querySelector("");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}

// Append to the UL.
function addToUL(numberToAppend) {
  const UL = document.querySelector("");
  const newLI = document.createElement("");
  newLI.innerText = numberToAppend;
  UL.appendChild(newLI);
}
