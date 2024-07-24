document.getElementById("add-button").addEventListener("click", function () {
  const value = document.getElementById("todo-input").value;
  const child = document.createElement("li");
  const button = document.createElement("button");

  child.textContent = value;
  button.textContent = "Remove";
  button.classList.add("remove-button");
  child.appendChild(button);

  document.getElementById("todo-list").appendChild(child);

  button.addEventListener("click", function (e) {
    e.currentTarget.parentNode.remove();
  });
});
