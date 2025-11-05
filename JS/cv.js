

function typeText(id, text, speed) {
  const el = document.getElementById(id);
  let i = 0;
  el.textContent = "";

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  typeText("typed-name", "Asta Mbathie", 150);
  setTimeout(() => {
    typeText("typed-title", "Étudiante en informatique", 150);
  }, 2000);
});


