document.addEventListener("DOMContentLoaded", function () {
  try {
    var content = document.querySelector(".content");
    if (!content) return;

    var headings = Array.from(content.querySelectorAll("h2, h3"));
    if (headings.length === 0) return;

    var pin = document.createElement("div");
    pin.id = "hx-heading-pin";
    pin.innerHTML =
      '<span class="hx-pin-h2"></span>' +
      '<span class="hx-pin-sep">\u203A</span>' +
      '<span class="hx-pin-h3"></span>';
    content.insertBefore(pin, content.firstChild);

    var h2El = pin.querySelector(".hx-pin-h2");
    var sepEl = pin.querySelector(".hx-pin-sep");
    var h3El = pin.querySelector(".hx-pin-h3");

    var THRESHOLD = 52; // px from top of viewport

    function headingLabel(h) {
      var clone = h.cloneNode(true);
      clone.querySelectorAll("a.subheading-anchor, span[id]").forEach(function (el) {
        el.remove();
      });
      return clone.textContent.trim();
    }

    var ticking = false;

    function update() {
      ticking = false;
      var currentH2 = null;
      var currentH3 = null;

      for (var i = 0; i < headings.length; i++) {
        var h = headings[i];
        var rect = h.getBoundingClientRect();
        if (rect.top - THRESHOLD > 0) break;

        if (h.tagName === "H2") {
          currentH2 = h;
          currentH3 = null;
        } else if (h.tagName === "H3") {
          currentH3 = h;
        }
      }

      if (!currentH2 && !currentH3) {
        pin.classList.remove("visible");
        return;
      }

      h2El.textContent = currentH2 ? headingLabel(currentH2) : "";
      sepEl.style.display = currentH2 && currentH3 ? "inline" : "none";
      h3El.textContent = currentH3 ? headingLabel(currentH3) : "";
      pin.classList.add("visible");
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

    update();
  } catch (err) {
    console.error("[sticky-header] FAILED:", err);
  }
});
