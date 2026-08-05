document.addEventListener("DOMContentLoaded", function () {
  try {
    var content = document.querySelector(".content");
    if (!content) return;

    var headings = Array.from(
      content.querySelectorAll("h2, h3, h4, h5, h6")
    );

    if (headings.length === 0) return;

    var pin = document.createElement("div");
    pin.id = "hx-heading-pin";

    pin.innerHTML =
      '<span class="hx-pin-h2"></span>' +
      '<span class="hx-pin-sep hx-pin-sep-1">\u203A</span>' +
      '<span class="hx-pin-h3"></span>' +
      '<span class="hx-pin-sep hx-pin-sep-2">\u203A</span>' +
      '<span class="hx-pin-h4"></span>' +
      '<span class="hx-pin-sep hx-pin-sep-3">\u203A</span>' +
      '<span class="hx-pin-h5"></span>' +
      '<span class="hx-pin-sep hx-pin-sep-4">\u203A</span>' +
      '<span class="hx-pin-h6"></span>';

    content.insertBefore(pin, content.firstChild);

    var els = {
      h2: pin.querySelector(".hx-pin-h2"),
      h3: pin.querySelector(".hx-pin-h3"),
      h4: pin.querySelector(".hx-pin-h4"),
      h5: pin.querySelector(".hx-pin-h5"),
      h6: pin.querySelector(".hx-pin-h6")
    };

    var seps = [
      pin.querySelector(".hx-pin-sep-1"),
      pin.querySelector(".hx-pin-sep-2"),
      pin.querySelector(".hx-pin-sep-3"),
      pin.querySelector(".hx-pin-sep-4")
    ];

    var THRESHOLD = 52;
    var levels = ["h2", "h3", "h4", "h5", "h6"];
    var ticking = false;

    function headingLabel(heading) {
      var clone = heading.cloneNode(true);

      clone
        .querySelectorAll("a.subheading-anchor, span[id]")
        .forEach(function (element) {
          element.remove();
        });

      return clone.textContent.trim();
    }

    function update() {
      ticking = false;

      var current = {
        h2: null,
        h3: null,
        h4: null,
        h5: null,
        h6: null
      };

      for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];
        var rect = heading.getBoundingClientRect();

        if (rect.top - THRESHOLD > 0) break;

        var tag = heading.tagName.toLowerCase();
        var index = levels.indexOf(tag);

        current[tag] = heading;

        for (var j = index + 1; j < levels.length; j++) {
          current[levels[j]] = null;
        }
      }

      var active = levels.filter(function (level) {
        return current[level];
      });

      if (active.length === 0) {
        pin.classList.remove("visible");
        return;
      }

      levels.forEach(function (level) {
        els[level].textContent = current[level]
          ? headingLabel(current[level])
          : "";
      });

      for (var s = 0; s < seps.length; s++) {
        var beforeActive = current[levels[s]];
        var afterActive = current[levels[s + 1]];

        seps[s].style.display =
          beforeActive && afterActive ? "inline" : "none";
      }

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
  } catch (error) {
    console.error("[sticky-header] FAILED:", error);
  }
});
