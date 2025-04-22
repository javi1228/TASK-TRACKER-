
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const taskText = this.value.trim();
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      this.value = "";
    }
  }
});
