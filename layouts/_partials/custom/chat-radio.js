(function () {
  function buildChat() {
    var content = document.querySelector(
      ".hextra-content, article, .main-content",
    );
    if (!content) return;

    // 1. Clean up Hugo pre/code blocks if lines are accidentally indented
    content.querySelectorAll("pre code").forEach(function (code) {
      var innerText = code.textContent.trim();
      if (!innerText.includes(":")) {
        var correctedP = document.createElement("p");
        correctedP.textContent = innerText;
        code.closest("pre").replaceWith(correctedP);
      }
    });

    var paragraphs = content.querySelectorAll("p");
    paragraphs.forEach(function (p) {
      if (p.dataset.processed === "true" || p.closest(".rc-bubble")) return;

      var text = p.innerHTML.trim();
      var upperText = text.toUpperCase();

      // 2. Identify Frequency Banners strictly by COM1 or COM2 tags
      if (upperText.includes("COM1") || upperText.includes("COM2")) {
        p.className = "rc-freq-banner";
        p.dataset.processed = "true";
        return;
      }

      // 3. Process Chat Speakers
      var match = text.match(/^([^:\n]+):([\s\S]*)$/);
      if (match) {
        var speaker = match[1].trim();
        var message = match[2].trim();
        var cleanSpeaker = speaker.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase();

        var isPilot = cleanSpeaker.includes("pilot");
        var roleClass = "rc-atc";

        if (isPilot) {
          roleClass = "rc-pilot";
        } else if (cleanSpeaker.includes("ground")) {
          roleClass = "rc-station-ground";
        } else if (cleanSpeaker.includes("tower")) {
          roleClass = "rc-station-tower";
        } else if (
          cleanSpeaker.includes("operations") ||
          cleanSpeaker.includes("ops")
        ) {
          roleClass = "rc-station-ops";
        }

        var wrap = document.createElement("div");
        wrap.className = "rc-bubble-wrap " + roleClass;

        var label = document.createElement("div");
        label.className = "rc-label";
        label.innerHTML = speaker;

        var bubble = document.createElement("div");
        bubble.className = "rc-bubble";
        bubble.innerHTML = "<p>" + message + "</p>";

        wrap.appendChild(label);
        wrap.appendChild(bubble);

        p.replaceWith(wrap);
        wrap.dataset.processed = "true";
      } else {
        // 4. Clean Fallback: ANY text line without a colon becomes a flat status message
        p.className = "rc-action";
        p.dataset.processed = "true";
      }
    });
  }

  // 5. Group everything under each H3 (until the next H1/H2/H3) into a
  //    .rc-phase wrapper with a sticky vertical "rail" tag on the left,
  //    so the current phase is visible even after you've scrolled past
  //    the heading itself.
  function groupPhases() {
    var content = document.querySelector(
      ".hextra-content, article, .main-content",
    );
    if (!content) return;

    var h3s = Array.prototype.slice.call(content.querySelectorAll("h3"));
    h3s.forEach(function (h3) {
      if (h3.closest(".rc-phase")) return; // already grouped

      var wrap = document.createElement("div");
      wrap.className = "rc-phase";

      h3.parentNode.insertBefore(wrap, h3);
      wrap.appendChild(h3);

      var node = wrap.nextSibling;
      while (
        node &&
        !(node.nodeType === 1 && /^H[1-3]$/.test(node.tagName))
      ) {
        var next = node.nextSibling;
        wrap.appendChild(node);
        node = next;
      }

      var rail = document.createElement("div");
      rail.className = "rc-phase-rail";

      var tag = document.createElement("span");
      tag.className = "rc-phase-tag";
      // Swap to h3.textContent.trim().charAt(0) instead for a single-letter tag.
      tag.textContent = h3.textContent.trim();

      rail.appendChild(tag);
      wrap.appendChild(rail);
    });
  }

  function processAll() {
    buildChat();
    groupPhases();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", processAll);
  } else {
    processAll();
  }

  setInterval(processAll, 300);
  var obs = new MutationObserver(processAll);
  obs.observe(document.body, { childList: true, subtree: true });
})();
