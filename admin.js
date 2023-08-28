document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("adminForm");

  function deleteText(index) {
    const existingTexts = JSON.parse(localStorage.getItem("rainbowCardTexts") || "[]");
    existingTexts.splice(index, 1);
    localStorage.setItem("rainbowCardTexts", JSON.stringify(existingTexts));
    refreshTextList();
  }

  function refreshTextList() {
    const textList = document.getElementById("textList");
    textList.innerHTML = "";
  
    const existingTexts = JSON.parse(localStorage.getItem("rainbowCardTexts") || "[]");
    
    existingTexts.forEach((text, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${text}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        deleteText(index);
      };

      listItem.appendChild(deleteButton);
      textList.appendChild(listItem);
    });
  }

  refreshTextList();

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newText = document.getElementById("newText").value;
    const existingTexts = JSON.parse(localStorage.getItem("rainbowCardTexts") || "[]");
    existingTexts.push(newText);
    localStorage.setItem("rainbowCardTexts", JSON.stringify(existingTexts));

    document.getElementById("newText").value = "";

    refreshTextList();
  });
});
