document.addEventListener("DOMContentLoaded", function () {
  try {
    var content = document.querySelector(".content");
    if (!content) return;

    var headings = Array.from(content.querySelectorAll("h2, h3"));
    if (headings.length === 0) return;

    var bar = document.createElement("div");
    bar.id = "sticky-heading-crumb";
    content.insertBefore(bar, content.firstChild);

    var THRESHOLD = 52; // px from top — line at which a heading counts as "passed"

    function headingLabel(h) {
      var clone = h.cloneNode(true);
      clone.querySelectorAll("a.subheading-anchor, span[id]").forEach(function (el) {
        el.remove();
      });
      return clone.textContent.trim();
    }

    function render(h2, h3) {
      if (!h2 && !h3) {
        bar.classList.remove("visible");
        return;
      }
      var parts = [];
      if (h2) parts.push(headingLabel(h2));
      if (h3) parts.push(headingLabel(h3));
      bar.textContent = parts.join(" \u203A ");
      bar.classList.add("visible");
    }

    var ticking = false;

    function update() {
      ticking = false;
      var currentH2 = null;
      var currentH3 = null;

      for (var i = 0; i < headings.length; i++) {
        var h = headings[i];
        var rect = h.getBoundingClientRect();
        if (rect.top - THRESHOLD > 0) break; // this heading hasn't been reached yet

        if (h.tagName === "H2") {
          currentH2 = h;
          currentH3 = null; // reset — we're in a new H2 section
        } else if (h.tagName === "H3") {
          currentH3 = h;
        }
      }

      render(currentH2, currentH3);
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    update(); // run once immediately, correct even on page-load mid-scroll
  } catch (err) {
    console.error("[sticky-header] FAILED:", err);
  }
});
