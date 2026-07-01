document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("td").forEach(function (td) {
    var parts = td.innerHTML.split(/<br\s*\/?>/i);
    if (!parts.some((p) => p.trim().startsWith("- "))) return;

    var html = "";
    var inList = false;

    parts.forEach(function (part) {
      var trimmed = part.trim();
      if (trimmed.startsWith("- ")) {
        if (!inList) {
          html += "<ul>";
          inList = true;
        }
        html +=
          "<li style='margin:3px 0;margin-block:3px;margin-block-start:3px;margin-block-end:3px;'>" +
          trimmed.slice(2) +
          "</li>";
      } else {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        if (trimmed) html += trimmed + "<br>";
      }
    });

    if (inList) html += "</ul>";
    td.innerHTML = html;
  });
});
