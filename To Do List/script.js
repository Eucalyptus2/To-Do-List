// // Make your variables and get the elements / classes / id from HTML

const list = document.querySelector("#list");
const userInput = document.querySelector(".user-input");
const form = document.querySelector("form");

//Create a function for a new task
const newTask = () => {
  // Create new list template (e.g [] lorem ipsem [Delete] )
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox"); // <-- this is to add the actual checkbox type.
  const addTask = document.createElement("li");
  const removeTask = document.createElement("button");

  // Add what the user types to the created list
  addTask.innerText = userInput.value;
  // Gives the empty button a indicator to delete (will probably replace with a trash icon later?)
  removeTask.innerText = "Delete";

  // Making the list
  addTask.append(checkbox); // Checkbox
  list.append(addTask); // Add the list to the ul (the users input shows up here)
  addTask.append(removeTask); // Every new list gets a  "delete" button attachment

  // When a user clicks that delete button, the task is removed from the list.
  removeTask.addEventListener("click", () => {
    addTask.remove();
  });

  // If user input is empty
  if (userInput.value === "") {
    addTask.remove();
  }
  // To refresh user input
  userInput.value = "";
};

// Submits the list and does NOT change pages. It refreshes.  :)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  newTask();
});
// Remember the 'e' stands for 'event'. Also because its a form, I can press enter vs clicking (thank goodness)
