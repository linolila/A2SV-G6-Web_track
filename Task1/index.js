document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
addButton.addEventListener("click", addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
   
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = " # " + taskText;
    taskSpan.className = "task-text"; 

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = () => {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = taskSpan.textContent;
      editInput.className = "edit-input";

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.className = "save-btn";

      saveBtn.onclick = () => {
        const newText = editInput.value.trim();
        newText.className = "edited-text";

        if (newText !== "") taskSpan.textContent = newText;
        listItem.replaceChild(taskSpan, editInput);
        listItem.replaceChild(editBtn, saveBtn);
      };

      listItem.replaceChild(editInput, taskSpan);
      listItem.replaceChild(saveBtn, editBtn);
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => listItem.remove();

    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
});
