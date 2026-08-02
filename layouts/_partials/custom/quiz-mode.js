document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector(".content");
  if (!content) return;

  function wrapAsQuizTarget(el, extraClass) {
    if (el.closest(".quiz-target")) return;
    var wrapper = document.createElement("span");
    wrapper.className = "quiz-target" + (extraClass ? " " + extraClass : "");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    attachSticker(wrapper);
  }

  function attachSticker(wrapper) {
    var sticker = document.createElement("span");
    sticker.className = "quiz-sticker";
    wrapper.appendChild(sticker);
    sticker.addEventListener("click", function (e) {
      e.stopPropagation();
      sticker.classList.toggle("revealed");
    });
  }

  // 1. Auto: bold + highlighted text (existing behavior)
  Array.from(content.querySelectorAll("strong, mark")).forEach(function (el) {
    if (el.closest("h1, h2, h3, h4, h5, h6")) return;
    if (/VIP\s*:?/.test(el.textContent)) return; // skip "XXX VIP: Title" labels
    if (/^§\s*[\d.]+/.test(el.textContent.trim())) return; // skip "§ 61.113 ..." law titles
    wrapAsQuizTarget(el);
  });
  // 2. Inline: <span class="quiz">...</span> written directly in markdown
  Array.from(content.querySelectorAll("span.quiz")).forEach(function (el) {
    wrapAsQuizTarget(el, "quiz-inline-block");
  });

  // 3. Block: <!--quiz-start--> ... <!--quiz-end--> comment pairs
  var walker = document.createTreeWalker(content, NodeFilter.SHOW_COMMENT, null);
  var starts = [];
  var node;
  while ((node = walker.nextNode())) {
    var text = node.nodeValue.trim();
    if (text === "quiz-start") starts.push(node);
  }

  starts.forEach(function (startNode) {
    var wrapper = document.createElement("div");
    wrapper.className = "quiz-target quiz-block-target";

    var parent = startNode.parentNode;
    parent.insertBefore(wrapper, startNode);

    var sibling = startNode.nextSibling;
    var toMove = [];
    while (sibling) {
      if (sibling.nodeType === Node.COMMENT_NODE && sibling.nodeValue.trim() === "quiz-end") {
        break;
      }
      toMove.push(sibling);
      sibling = sibling.nextSibling;
    }

    toMove.forEach(function (n) { wrapper.appendChild(n); });
    attachSticker(wrapper);

    startNode.remove();
    if (sibling) sibling.remove(); // remove the quiz-end comment
  });

  // Toggle button
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
      document.querySelectorAll(".quiz-sticker").forEach(function (s) {
        s.classList.remove("revealed");
      });
    }
  });
});
