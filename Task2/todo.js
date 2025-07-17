document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var addButton = document.getElementById("addButton");
    var taskList = document.getElementById("taskList");
    addButton.addEventListener("click", addTask);
    function addTask() {
        var taskText = taskInput.value.trim();
        if (taskText === "")
            return;
        var task = {
            id: Date.now().toString(), // Unique ID for each task
            text: taskText,
        };
        var listItem = document.createElement("li");
        listItem.dataset.id = task.id;
        var taskSpan = document.createElement("span");
        taskSpan.textContent = " # " + task.text;
        taskSpan.className = "task-text";
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = function () {
            var _a;
            var editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = ((_a = taskSpan.textContent) === null || _a === void 0 ? void 0 : _a.replace(/^ # /, "")) || "";
            editInput.className = "edit-input";
            var saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.className = "save-btn";
            saveBtn.onclick = function () {
                var newText = editInput.value.trim();
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
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () { return listItem.remove(); };
        listItem.appendChild(taskSpan);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});
