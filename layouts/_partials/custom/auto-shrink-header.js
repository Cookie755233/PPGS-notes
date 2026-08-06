document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".hextra-nav-container");
  if (!header) return;

  var hamburger = document.querySelector(".hextra-hamburger-menu");

  var headerSearchWrapper = header.querySelector(
    ".hextra-search-wrapper"
  );

  var headerSearchInput = headerSearchWrapper
    ? headerSearchWrapper.querySelector(".hextra-search-input")
    : null;

  var lastScroll = window.scrollY;
  var accumulatedDown = 0;
  var accumulatedUp = 0;

  var minScroll = 80;
  var hideDistance = 24;
  var showDistance = 8;

  var ticking = false;

  function showHeader() {
    header.classList.remove("hx-nav-hidden");
    document.body.classList.remove("hx-nav-collapsed");
  }

  function isMobileMenuOpen() {
    return !!(
      hamburger &&
      hamburger.getAttribute("aria-expanded") === "true"
    );
  }

  function isHeaderSearchResultsVisible() {
    if (!headerSearchWrapper) return false;

    var results = headerSearchWrapper.querySelector(
      ".hextra-search-results"
    );

    if (!results) return false;

    return !results.classList.contains("hx:hidden");
  }

  function isHeaderSearchFocused() {
    return !!(
      headerSearchWrapper &&
      document.activeElement &&
      headerSearchWrapper.contains(document.activeElement)
    );
  }

  function isHeaderSearchActive() {
    return (
      isHeaderSearchFocused() ||
      isHeaderSearchResultsVisible()
    );
  }

  function hideHeader() {
    if (isHeaderSearchActive() || isMobileMenuOpen()) return;

    header.classList.add("hx-nav-hidden");
    document.body.classList.add("hx-nav-collapsed");
  }

  function updateHeaderState() {
    if (isHeaderSearchActive() || isMobileMenuOpen()) {
      showHeader();
    }
  }

  if (headerSearchWrapper) {
    headerSearchWrapper.addEventListener("focusin", function () {
      showHeader();
    });

    headerSearchWrapper.addEventListener("focusout", function () {
      setTimeout(updateHeaderState, 0);
    });

    headerSearchWrapper.addEventListener("input", function () {
      showHeader();
      setTimeout(updateHeaderState, 0);
    });

    headerSearchWrapper.addEventListener("keydown", function () {
      showHeader();
      setTimeout(updateHeaderState, 0);
    });

    headerSearchWrapper.addEventListener("click", function () {
      showHeader();
      setTimeout(updateHeaderState, 0);
    });

    var searchObserver = new MutationObserver(function () {
      updateHeaderState();
    });

    searchObserver.observe(headerSearchWrapper, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      setTimeout(function () {
        if (isMobileMenuOpen()) {
          showHeader();
        }
      }, 0);
    });
  }

  document.addEventListener("pointerdown", function (event) {
    if (
      headerSearchWrapper &&
      headerSearchWrapper.contains(event.target)
    ) {
      return;
    }

    if (headerSearchInput) {
      headerSearchInput.blur();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && headerSearchInput) {
      headerSearchInput.blur();
    }
  });

  function processScroll() {
    ticking = false;

    var currentScroll = Math.max(window.scrollY, 0);
    var difference = currentScroll - lastScroll;

    if (isHeaderSearchActive() || isMobileMenuOpen()) {
      showHeader();
      lastScroll = currentScroll;
      accumulatedDown = 0;
      accumulatedUp = 0;
      return;
    }

    if (currentScroll <= minScroll) {
      showHeader();
      lastScroll = currentScroll;
      accumulatedDown = 0;
      accumulatedUp = 0;
      return;
    }

    if (difference > 0) {
      accumulatedDown += difference;
      accumulatedUp = 0;

      if (accumulatedDown >= hideDistance) {
        hideHeader();
        accumulatedDown = 0;
      }
    } else if (difference < 0) {
      accumulatedUp += Math.abs(difference);
      accumulatedDown = 0;

      if (accumulatedUp >= showDistance) {
        showHeader();
        accumulatedUp = 0;
      }
    }

    lastScroll = currentScroll;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(processScroll);
    },
    { passive: true }
  );

  showHeader();
});
