var input = document.getElementById("new-task"); // Any element/tag with the id of "new-task" becomes the varaible input. 
var addButton = document.getElementsByTagName("button")[0]; // All butons become the variable "addButton".
var incompleteTasks = document.getElementById("incomplete-tasks"); // Any element/tag with the id of "incompleteTasks" becomes the varaible incompleteTasks
var completedTasks = document.getElementById("completed-tasks"); // Any element/tag with the id of "completed-tasks" becomes the variable completedTasks
var importantTasks = document.getElementById("important-task"); // Any element/tag witth the id of "important-task" becomes the varaible importantTasks
var importantCompletedTasks = document.getElementById("importantCompleted-tasks");

var counter = 0;

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li"); //Creates new list item
  var checkbox = document.createElement("input"); //Makes the checkbox a variable/input.
  var checkLabel = document.createElement("label"); //Labels
  var importantBox = document.createElement("input"); //Makes the importantBox a variable/input.
  var importantLabel = document.createElement("label"); //Labels
  var editMode = document.createElement("input"); //Creates an edit mod
  var editButton = document.createElement("button"); //Activated edit mode
  var deleteButton = document.createElement("button"); //Creates a delete button


  //Modify each element
  checkbox.type = "checkbox"; // The input is defined as "checkbox"
  checkbox.className = "checkbox"; // Sets the checkbox element to the class "checkbox", gives ability to style the checkbox
  importantBox.type = "checkbox"; // Defines the input as "checkbox"
  importantBox.className = "importantBox"; //Sets the importantBox element to the class "importantBox", gives ability to style the importantBox
  editMode.type = "text"; // Defines the type of input as "text"
  editButton.innerText = "Edit"; //Names the button/text
  editButton.className = "edit";  // Sets the editButton element to the class "edit", gives ability to style the editButton
  deleteButton.innerText = "Delete"; //Names the button/text, grabs the text between the start and end tags of the deleteButton element. 
  deleteButton.className = "delete"; // Used to style delete button
  checkLabel.innerText = taskString; // 
  checkLabel.className = "checkLabel"; // Sets the checkLabel element to the class "checkLabel", gives ability to style the checkLabel
  importantLabel.className = "importantLabel"; // Sets the importantLabel element to the class "importantLabel", gives ability to style the importantLabel
  importantBox.id = "" + counter; //Id property turns/displays a string
  importantLabel.htmlFor  = "" + counter;  //For property turns into/displays a string
  counter++; //Increments the counter by 1

  listItem.appendChild(importantBox); //Adds  to the DOM
  listItem.appendChild(importantLabel);
  listItem.appendChild(checkbox);
  listItem.appendChild(checkLabel);
  listItem.appendChild(editMode);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem; //Lists the items
}

var addTask = function() { //Adds a new task
  var listItem = createNewTaskElement(input.value);
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted, taskImportant);
  input.value = "";
}

var editTask = function() { // Edits an already made task
  var listItem = this.parentNode;

  var inputEditMode = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector(".checkLabel");

  var editClass = listItem.classList.contains("editMode");
  if (editClass) {
    label.innerText = inputEditMode.value;
  }
  else {
    inputEditMode.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}
var deleteTask = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode; //Parent permission over everything in ul, et. makes it so that the deleteTask will appear on every listed item and removes any child (task) upon clicking delete
  ul.removeChild(listItem);
}

var taskCompleted = function() { // Shows that the task is complete
  var listItem = this.parentNode;
  completedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete, taskCompletedImportant);
}

var taskCompletedImportant = function() { // Shows that the task is complete
  var listItem = this.parentNode;
  importantCompletedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskImportant, taskCompleted); // Goes to taskImportant before taskCompleted
}

var taskIncomplete = function() {
  var listItem = this.parentNode; //Activates when the checkbox is really checked
  incompleteTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted, taskImportant);
}

var taskImportant = function() {
  var listItem = this.parentNode;
  importantTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskCompletedImportant, taskIncomplete); //Listem

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler, importantBoxEventHander) {
  // console.log("test")
  var checkBox = taskListItem.querySelector(".checkbox");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  var importantTask = taskListItem.querySelector(".importantBox");

  editButton.onclick = editTask; //connects edit task to the edit button
  deleteButton.onclick = deleteTask; //connectes delete task to the delete button
  checkBox.onchange = checkBoxEventHandler;
  importantTask.onchange = importantBoxEventHander;
}
addButton.addEventListener("click", addTask); //The variable addButton "listens" for a click
