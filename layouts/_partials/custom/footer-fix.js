document.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelector(".hextra-footer");
  if (!footer) return;

  function adjustFooter() {
    footer.style.marginTop = "0px";

    var rect = footer.getBoundingClientRect();
    var footerTop = rect.top;
    var footerHeight = rect.height;
    var availableSpace =
      window.innerHeight - footerTop - footerHeight;

    if (availableSpace > 0) {
      footer.style.marginTop = availableSpace + "px";
    }
  }

  adjustFooter();

  window.addEventListener("resize", adjustFooter);

  if (document.readyState === "complete") {
    adjustFooter();
  } else {
    window.addEventListener("load", adjustFooter);
  }
});
