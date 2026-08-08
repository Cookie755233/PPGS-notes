document.addEventListener("DOMContentLoaded", function () {

  // 1) Wrap leading "(a)" / "(1)" / "1." style markers in their own span
  //    and flex the rest of the line so wraps align to text, not the marker.
  function wrapListMarkers() {
    document.querySelectorAll(".content li").forEach(function (li) {
      if (li.querySelector(":scope > .li-line")) return; // already processed

      // find a directly-nested ul/ol, if any — its content shouldn't be
      // pulled into the flex line, it stays as its own block below
      var nestedList = null;
      for (var i = 0; i < li.childNodes.length; i++) {
        var n = li.childNodes[i];
        if (n.nodeType === 1 && (n.tagName === "UL" || n.tagName === "OL")) {
          nestedList = n;
          break;
        }
      }

      // collect the "first line" nodes (everything before the nested list)
      var lineNodes = [];
      for (var i = 0; i < li.childNodes.length; i++) {
        var n = li.childNodes[i];
        if (n === nestedList) break;
        lineNodes.push(n);
      }
      if (lineNodes.length === 0) return;

      var first = lineNodes[0];
      if (first.nodeType !== 3) return; // first node must be text to find a marker

      var m = first.textContent.match(/^\s*(\([^)]+\)|[a-zA-Z0-9]+\.)\s+/);
      if (!m) return; // no recognizable marker, leave this li untouched

      var markerText = m[1];
      var restOfFirst = first.textContent.slice(m[0].length);

      var lineDiv = document.createElement("div");
      lineDiv.className = "li-line";

      var markerSpan = document.createElement("span");
      markerSpan.className = "li-marker";
      markerSpan.textContent = markerText;

      var textSpan = document.createElement("span");
      textSpan.className = "li-text";
      if (restOfFirst) textSpan.appendChild(document.createTextNode(restOfFirst));
      for (var i = 1; i < lineNodes.length; i++) textSpan.appendChild(lineNodes[i]);

      lineDiv.appendChild(markerSpan);
      lineDiv.appendChild(textSpan);

      lineNodes.forEach(function (n) {
        if (n.parentNode === li) li.removeChild(n);
      });
      li.insertBefore(lineDiv, li.firstChild);
    });
  }

  // 2) Your existing all-caps <em> section-label styling
  function labelUppercaseEm() {
    document.querySelectorAll(".content li em, .content li p em").forEach(function (em) {
      if (em.closest("strong")) return;
      var text = em.textContent.trim();
      var letters = text.replace(/[^a-zA-Z]/g, "");
      if (letters.length === 0) return;
      var upperRatio = (letters.match(/[A-Z]/g) || []).length / letters.length;
      if (upperRatio >= 0.75) {
        em.classList.add("list-section-label");
      }
    });
  }

  wrapListMarkers();
  labelUppercaseEm();
});
