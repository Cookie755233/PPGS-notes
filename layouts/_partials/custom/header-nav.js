document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(
    ".hextra-nav-container nav"
  );

  if (!nav) return;

  if (document.getElementById("header-topic-nav")) return;

  var searchWrapper =
    nav.querySelector(".hextra-search-wrapper") ||
    nav.querySelector(".search-wrapper") ||
    nav.querySelector('[class*="search-wrapper"]') ||
    nav.querySelector("[data-search]") ||
    nav.querySelector('button[aria-label*="Search"]') ||
    nav.querySelector('a[aria-label*="Search"]');

  function getDocsBase() {
    var link = document.querySelector(
      '.hextra-sidebar-container a[href*="/docs/"]'
    );

    if (!link) return "/docs/";

    var href = link.getAttribute("href") || "";
    var index = href.indexOf("/docs/");

    if (index === -1) return "/docs/";

    return href.slice(0, index + "/docs/".length);
  }

  var base = getDocsBase();

  var topics = [
    { label: "COM", slug: "com" },
    { label: "FAR/AIM", slug: "far" },
    { label: "JOHNNY", slug: "gn" },
    { label: "SAM", slug: "ins" },
    { label: "WAYNE", slug: "mat" },
    { label: "BECKY", slug: "met" },
    { label: "DANNY", slug: "perf" },
    { label: "SEAN", slug: "pof" }
  ];

  var path = window.location.pathname;

  var topicNav = document.createElement("div");
  topicNav.id = "header-topic-nav";
  topicNav.setAttribute(
    "aria-label",
    "Document topics"
  );

  topics.forEach(function (topic) {
    var link = document.createElement("a");

    link.href = base + topic.slug + "/";
    link.textContent = topic.label;

    var topicPath = base + topic.slug + "/";

    if (
      path === topicPath ||
      path.indexOf(topicPath) === 0
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    topicNav.appendChild(link);
  });

  var divider = document.createElement("div");
  divider.id = "header-topic-divider";
  divider.setAttribute("aria-hidden", "true");

  if (searchWrapper) {
    var insertionTarget = searchWrapper;

    while (
      insertionTarget.parentElement &&
      insertionTarget.parentElement !== nav
    ) {
      insertionTarget =
        insertionTarget.parentElement;
    }

    nav.insertBefore(topicNav, insertionTarget);
    nav.insertBefore(divider, insertionTarget);
  } else {
    nav.appendChild(topicNav);
    nav.appendChild(divider);
  }
});
