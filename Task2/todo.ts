interface Task {
  id: string;
  text: string;
  completed?: boolean;
}

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const addButton = document.getElementById("addButton") as HTMLButtonElement;
  const taskList = document.getElementById("taskList") as HTMLUListElement;

  addButton.addEventListener("click", addTask);

  function addTask(): void {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task: Task = {
      id: Date.now().toString(), 
      text: taskText,
    };

    const listItem = document.createElement("li");
    listItem.dataset.id = task.id;

    const taskSpan = document.createElement("span");
    taskSpan.textContent = " # " + task.text;
    taskSpan.className = "task-text";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = () => {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = taskSpan.textContent?.replace(/^ # /, "") || "";
      editInput.className = "edit-input";

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.className = "save-btn";

      saveBtn.onclick = () => {
        const newText = editInput.value.trim();
        if (newText !== "") {
          task.text = newText;
          taskSpan.textContent = " # " + newText;
        }
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