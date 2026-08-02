function initHangingIndent() {
  var content = document.querySelector(".content");
  if (!content) return;

  var items = content.querySelectorAll("li");
  items.forEach(function (li) {
    if (li.dataset.hangProcessed) return;
    li.dataset.hangProcessed = "1";

    // Grab only the leading inline content (stop at nested UL/OL)
    var leadingNodes = [];
    for (var i = 0; i < li.childNodes.length; i++) {
      var node = li.childNodes[i];
      if (node.nodeType === Node.ELEMENT_NODE && (node.tagName === "UL" || node.tagName === "OL")) break;
      leadingNodes.push(node);
    }
    if (leadingNodes.length === 0) return;

    // Wrap that leading content in its own block so nested lists are unaffected
    var wrap = document.createElement("div");
    wrap.className = "hang-wrap";
    li.insertBefore(wrap, leadingNodes[0]);
    leadingNodes.forEach(function (n) { wrap.appendChild(n); });

    // Detect a leading label: § 91.123 / (a) / a. / 1. etc.
    var firstNode = wrap.firstChild;
    if (!firstNode || firstNode.nodeType !== Node.TEXT_NODE) return;

    var match = firstNode.textContent.match(/^\s*(§\s*[\d.]+|\([^)]+\)|[A-Za-z0-9]+\.)\s*/);
    if (!match) return;

    var labelSpan = document.createElement("span");
    labelSpan.className = "hang-label";
    labelSpan.textContent = match[1];

    var restNode = document.createTextNode(" " + firstNode.textContent.slice(match[0].length));
    wrap.replaceChild(restNode, firstNode);
    wrap.insertBefore(labelSpan, restNode);

    // Measure the label and set hanging indent to match its width
    var gap = 6; // px space between label and text
    var indent = Math.ceil(labelSpan.getBoundingClientRect().width + gap);
    wrap.style.paddingLeft = indent + "px";
    wrap.style.textIndent = "-" + indent + "px";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initHangingIndent(); // run first, before the breadcrumb script touches the DOM
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
