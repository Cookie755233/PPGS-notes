document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".content li em, .content li p em").forEach(function (em) {
    // Skip if inside a strong (that's the ***bold+italic*** case)
    if (em.closest("strong")) return;
    var text = em.textContent.trim();
    // Only target if majority of letters are uppercase
    var letters = text.replace(/[^a-zA-Z]/g, "");
    if (letters.length === 0) return;
    var upperRatio = (letters.match(/[A-Z]/g) || []).length / letters.length;
    if (upperRatio >= 0.75) {
      em.classList.add("list-section-label");
    }
  });
});
