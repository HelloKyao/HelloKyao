document.addEventListener("DOMContentLoaded", function() {
  const card = document.getElementById("rainbowCard");

  document.querySelectorAll('.colorOption').forEach((button) => {
    button.addEventListener('click', function() {
      const selectedColor = this.style.backgroundColor;
      card.style.backgroundColor = selectedColor;
      card.style.display = "block";

      const p = document.getElementById("cardText");
      const storedTexts = JSON.parse(localStorage.getItem("rainbowCardTexts") || "[]");

      if (storedTexts.length > 0) {
        const randomIndex = Math.floor(Math.random() * storedTexts.length);
        p.textContent = storedTexts[randomIndex];
      } else {
        p.textContent = "Click a color to see a message!";
      }
    });
  });
});
