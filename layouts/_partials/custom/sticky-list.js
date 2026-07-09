document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector(".content");
  if (!content) return;

  var bar = document.createElement("div");
  bar.id = "sticky-breadcrumb";
  content.append(bar);

  var currentActive = null;

  function extractLabel(li) {
    var text = "";
    var firstContentNode = null;

    for (var i = 0; i < li.childNodes.length; i++) {
      var node = li.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.trim()) firstContentNode = firstContentNode || node;
        text += node.textContent;
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.tagName !== "UL" &&
        node.tagName !== "OL"
      ) {
        firstContentNode = firstContentNode || node;
        text += node.textContent;
        break;
      } else {
        break;
      }
    }

    text = text.trim();

    // Exclude ***bold+italic*** items (strong wrapping em or em wrapping strong)
    if (firstContentNode && firstContentNode.nodeType === Node.ELEMENT_NODE) {
      var tag = firstContentNode.tagName;
      if (
        (tag === "STRONG" && firstContentNode.querySelector("em")) ||
        (tag === "EM" && firstContentNode.querySelector("strong"))
      ) return null;
    }

    // § number — highest priority
    var section = text.match(/§\s*[\d.]+/);
    if (section) return section[0];

    // Parenthetical like (a), (1)
    var paren = text.match(/^\(([^)]+)\)/);
    if (paren) return "(" + paren[1] + ")";

    // ALL CAPS section labels — exclude
    var letters = text.replace(/[^a-zA-Z]/g, "");
    if (letters.length > 0) {
      var upperRatio = (letters.match(/[A-Z]/g) || []).length / letters.length;
      if (upperRatio >= 0.75) return null;
    }

    return text.slice(0, 14);
  }

  function buildBreadcrumb(li) {
    var parts = [];
    var el = li;
    while (el) {
      if (el.tagName === "LI") {
        var label = extractLabel(el);
        if (label) parts.unshift(label);
      }
      var parentLi = el.parentElement ? el.parentElement.closest("li") : null;
      el = parentLi;
    }
    return parts.join(" › ");
  }

  var items = content.querySelectorAll("li");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var label = buildBreadcrumb(entry.target);
          if (label) {
            bar.textContent = label;
            if (currentActive) currentActive.classList.remove("active-highlight");
            currentActive = entry.target;
            currentActive.classList.add("active-highlight");
          }
        }
      });
    },
    { rootMargin: "-40px 0px -85% 0px", threshold: 0 }
  );

  items.forEach(function (li) {
    observer.observe(li);
  });
});
