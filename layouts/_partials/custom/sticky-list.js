document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector(".content");
  if (!content) return;

  var bar = document.createElement("div");
  bar.id = "sticky-breadcrumb";
  content.append(bar);

  var currentActive = null;

  function extractLabel(li) {
    var text = "";
    for (var i = 0; i < li.childNodes.length; i++) {
      var node = li.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.tagName !== "UL" &&
        node.tagName !== "OL"
      ) {
        text += node.textContent;
      } else {
        break;
      }
    }
    text = text.trim();
    var paren = text.match(/^\(([^)]+)\)/);
    if (paren) return "(" + paren[1] + ")";
    var section = text.match(/§\s*[\d.]+/);
    if (section) return section[0];
    return text.slice(0, 14);
  }

  function buildBreadcrumb(li) {
    var parts = [];
    var el = li;
    while (el) {
      if (el.tagName === "LI") parts.unshift(extractLabel(el));
      var parentLi = el.parentElement ? el.parentElement.closest("li") : null;
      el = parentLi;
    }
    return parts.join(" ");
  }

  var items = content.querySelectorAll("li");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          bar.textContent = buildBreadcrumb(entry.target);
          if (currentActive) currentActive.classList.remove("active-highlight");
          currentActive = entry.target;
          currentActive.classList.add("active-highlight");
        }
      });
    },
    { rootMargin: "-40px 0px -85% 0px", threshold: 0 },
  );
  items.forEach(function (li) {
    observer.observe(li);
  });
});
