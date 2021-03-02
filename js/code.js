// The pattern is this:
// Find the elements we want to read and change with querySelector()
// Find the button we want to click
// Write the function we want to call when we click
// Attach that function to the button

// It is a common pattern in UI programming.

// querySelector uses the same selectors css does to find html tags, so revise them if you're rusty. Here we use the tag's type.
const form = document.querySelector("form");
// using the name attribute to find a child of the form:
const button = form.addBtn;
// Here we select by id.
const output = document.querySelector("#totalDisplay");
// So now we have variables holding all the html elements our code needs.

// This is the function we can to call when the button is pressed. It's not called now, just defined.
function add(event) {
    // This stops the page reloading.
    event.preventDefault();
    // set the text of the output h2 to the sum of the numbers in the inputs. See how we use the name attribute defined in the html to find them.
    output.innerText = Number(form.firstNumber.value) + Number(form.secondNumber.value);
}

// attache the function to the button's click event. Now, when the button is clicked, the function is called.
button.addEventListener("click", add);
