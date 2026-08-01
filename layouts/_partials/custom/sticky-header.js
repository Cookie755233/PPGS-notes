document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("content");
  if (!container) return;

  var headings = Array.from(container.querySelectorAll("h2, h3"));
  if (headings.length === 0) return;

  var STICK_TOP = 48; // px, must match CSS `top` value on h2/h3

  headings.forEach(function (h) {
    var sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    sentinel.setAttribute("aria-hidden", "true");
    h.parentNode.insertBefore(sentinel, h);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            h.classList.remove("hx-pinned");
          } else if (entry.boundingClientRect.top < STICK_TOP) {
            h.classList.add("hx-pinned");
          }
        });
      },
      { rootMargin: "-" + STICK_TOP + "px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(sentinel);
  });
});
