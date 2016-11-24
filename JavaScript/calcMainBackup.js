//Javascript File

var taskInput = document.getElementById("new-task"); // Makes everything with the id of "new-task" act as the variable, taskInput. 
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
var createNewTaskElement = function(taskString) { //New Task List Item
  var listItem = document.createElement("li"); //Create List Item
  var checkBox = document.createElement("input"); //input (checkbox)
  var label = document.createElement("label"); //Labels
  var inputEditMode = document.createElement("input"); //Input (text) when editing a task
  var editButton = document.createElement("button"); //Essentialy a button to edit
  var deleteButton = document.createElement("button"); //button.delete creates the element deleteButton by grabbing all the elemn

  //Modify each element
  checkBox.type = "checkbox"; //Defines the type of input, in my case, as "checkbox" from "li > input[type="checkbox"]"
  inputEditMode.type = "text"; //Defines the type of input, in my case, as "text" from "input[type="text"]"
  editButton.innerText = "Edit"; //Names the button/text
  editButton.className = "edit";  // Class name is used for, in my purpose, styling the text/button "Delete"
  deleteButton.innerText = "Delete"; //Names the button/text 
  deleteButton.className = "delete"; //Class name used for in my purpose, styling the text/button "Delete"
  label.innerText = taskString;

  // Appends all required elements (the elements/vars created in the beginnin)
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(inputEditMode);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem; //Lists the item
}

var addTask = function() { // Adds a new task
  // console.log("Add task...");
  var listItem = createNewTaskElement(taskInput.value); //Create a new list item with the text from #new-task:
  incompleteTasks.appendChild(listItem); //Append listItem to incompleteTasksHolder
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
}

var editTask = function() { // Edits an existing task
  // console.log("Edit Task...");

  var listItem = this.parentNode;

  var inputEditMode = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) { //If parents class is .editMode 
    label.innerText = inputEditMode.value; //Switch from edit mode (".editMode"), and makes the labels text become the input's value
  }
  else {
    inputEditMode.value = label.innerText; //Switches to edit mode (".editMode"), and makes the labels value become the labels text
  }
  listItem.classList.toggle("editMode"); // Enables toggling of edit mode/feature (".editMode") on the parent

}
var deleteTask = function() { // Deletes an existing task
  // console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem); //Remove the parent list item from the ul
}

var taskCompleted = function() { // Marks task as complete 
  // console.log("Task complete...");
  var listItem = this.parentNode; //Append the task list item to the #completed-tasks
  completedTasks.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() { // Enables the ability to mark a task as incomplete
  // console.log("Task Incomplete...");
  var listItem = this.parentNode; //When checkbox is checked
  incompleteTasks.appendChild(listItem); // Append the task list item #incomplete-tasks
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // console.log("test")
  var checkBox = taskListItem.querySelector("input[type=checkbox]"); //Selects taskListItem's children
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask; //bind editTask to edit button
  deleteButton.onclick = deleteTask; //bind deleteTask to delete button
  checkBox.onchange = checkBoxEventHandler; //bind checkBoxEventHandler to checkbox
}

addButton.addEventListener("click", addTask); //addButton.onclick is addTask. Sets the click handler to the addTask function

for (var i = 0; i < incompleteTasks.children.length; i++) { // Repeated cycling of the incompleteTaskHolder ul list items
  bindTaskEvents(incompleteTasks.children[i], taskCompleted); // bind events to list item's completed tasks (taskCompleted)
}
for (var i = 0; i < completedTasks.children.length; i++) { // Repeated cycling of the completeTaskHolder ul list items
  bindTaskEvents(completedTasks.children[i], taskIncomplete); // Binds events to list item's incompleted tasks
}// JavaScript File