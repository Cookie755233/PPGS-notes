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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildChat);
  } else {
    buildChat();
  }

  setInterval(buildChat, 300);
  var obs = new MutationObserver(buildChat);
  obs.observe(document.body, { childList: true, subtree: true });
})();
