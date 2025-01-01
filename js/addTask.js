document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
      createdAt: formattedDate,
    };
    const result = taskManager.saveTask(taskData);
    if (result.success) {
        window.location.href = "tasks.html";
    } else {
      console.log("proses simpan gagal");
    }
  });
});
