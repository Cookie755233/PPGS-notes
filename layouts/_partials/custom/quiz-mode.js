document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector(".content");
  if (!content) return;

  // ---- Inline: strong/mark, direct class + click, no wrapper ----
  function makeInlineQuizzable(el) {
    if (el.classList.contains("quiz-inline")) return;
    el.classList.add("quiz-inline");
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      el.classList.toggle("revealed");
    });
  }

  Array.from(content.querySelectorAll("strong, mark")).forEach(function (el) {
    if (el.closest("h1, h2, h3, h4, h5, h6")) return;
    if (/VIP\s*:/.test(el.textContent)) return;
    if (/^§\s*[\d.]+/.test(el.textContent.trim())) return;
    makeInlineQuizzable(el);
  });

  Array.from(content.querySelectorAll("span.quiz")).forEach(function (el) {
    makeInlineQuizzable(el);
  });

  // ---- Block: <!--quiz-start--> ... <!--quiz-end--> ----
  function attachBlockSticker(wrapper) {
    var sticker = document.createElement("span");
    sticker.className = "quiz-sticker";
    wrapper.appendChild(sticker);
    sticker.addEventListener("click", function (e) {
      e.stopPropagation();
      sticker.classList.toggle("revealed");
    });
  }

  var walker = document.createTreeWalker(content, NodeFilter.SHOW_COMMENT, null);
  var starts = [];
  var node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.trim() === "quiz-start") starts.push(node);
  }

  starts.forEach(function (startNode) {
    var wrapper = document.createElement("div");
    wrapper.className = "quiz-target quiz-block-target";
    var parent = startNode.parentNode;
    parent.insertBefore(wrapper, startNode);

    var sibling = startNode.nextSibling;
    var toMove = [];
    while (sibling) {
      if (sibling.nodeType === Node.COMMENT_NODE && sibling.nodeValue.trim() === "quiz-end") break;
      toMove.push(sibling);
      sibling = sibling.nextSibling;
    }
    toMove.forEach(function (n) { wrapper.appendChild(n); });
    attachBlockSticker(wrapper);

    startNode.remove();
    if (sibling) sibling.remove();
  });

  // ---- Toggle button ----
  var btn = document.createElement("button");
  btn.id = "quiz-mode-toggle";
  btn.type = "button";
  btn.textContent = "\uD83C\uDFAF Quiz Mode";
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    var active = document.body.classList.toggle("quiz-mode-active");
    btn.classList.toggle("active", active);
    btn.textContent = active ? "\u2705 Quiz Mode: ON" : "\uD83C\uDFAF Quiz Mode";
    if (active) {
      content.querySelectorAll(".revealed").forEach(function (el) {
        el.classList.remove("revealed");
      });
    }
  });
});
