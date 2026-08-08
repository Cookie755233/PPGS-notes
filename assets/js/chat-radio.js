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

      // 2. Process Chat Speakers ("Name: message")
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
        // 3. Fallback: any line without a colon is a flat status/remark line
        //    (this also catches the *italic* stage-direction asides — the
        //    bold "**...**" context line is handled separately below,
        //    in groupPhases, before it would ever reach this fallback).
        p.className = "rc-action";
        p.dataset.processed = "true";
      }
    });
  }

  // 4. Group everything under each H3 (until the next H1/H2/H3) into a
  //    .rc-phase wrapper, and merge the heading with its optional bold
  //    "**COM2 on 133.3 — EVA Operations**" context line into a single
  //    sticky header bar (.rc-phase-header), instead of leaving them as
  //    two separate, redundant-looking blocks.
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

      // If the very next element after the heading is a paragraph made
      // of nothing but a single <strong>, treat it as the context line
      // and pull it out of the flow into the header.
      var freqText = "";
      var candidate = h3.nextElementSibling;
      if (candidate && candidate.tagName === "P") {
        var onlyChild =
          candidate.children.length === 1 ? candidate.firstElementChild : null;
        if (
          onlyChild &&
          onlyChild.tagName === "STRONG" &&
          onlyChild.textContent.trim() === candidate.textContent.trim()
        ) {
          freqText = onlyChild.textContent.trim();
          candidate.remove();
        }
      }

      var card = document.createElement("div");
      card.className = "rc-phase-card";

      var header = document.createElement("div");
      header.className = "rc-phase-header";
      header.appendChild(h3);

      if (freqText) {
        var freq = document.createElement("span");
        freq.className = "rc-phase-freq";
        freq.textContent = freqText;
        header.appendChild(freq);
      }
      card.appendChild(header);

      // Everything left in wrap at this point is the dialogue itself
      // (h3 has already moved into header) — move it all into the
      // rounded card body.
      var body = document.createElement("div");
      body.className = "rc-phase-body";
      while (wrap.firstChild) {
        body.appendChild(wrap.firstChild);
      }
      card.appendChild(body);

      wrap.appendChild(card);
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
