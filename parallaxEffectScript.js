if (window.innerWidth > 768) {
  // Set initial background position on page load
  window.addEventListener("DOMContentLoaded", function () {
    const parallax = document.getElementById("parallax");
    const about = document.getElementById("about");
    const storeHeadingParallax = document.getElementById("storeHeadingParallax");
    const contact = document.getElementById("contact");

    if (parallax) parallax.style.backgroundPositionY = "-100px";
    if (about) about.style.backgroundPositionY = "0";
    if (storeHeadingParallax) storeHeadingParallax.style.backgroundPositionY = "-100px";
    if (contact) contact.style.backgroundPositionY = "-100px";
  });

  // Update background position on scroll
  window.addEventListener("scroll", function () {
    const parallax = document.getElementById("parallax");
    const about = document.getElementById("about");
    const storeHeadingParallax = document.getElementById("storeHeadingParallax");
    const contact = document.getElementById("contact");
    const offset = window.pageYOffset;

    if (parallax) parallax.style.backgroundPositionY = (-100 - offset * 0.5) + "px";
    if (about) about.style.backgroundPositionY = (0 - offset * 0.1) + "px";
    if (storeHeadingParallax) storeHeadingParallax.style.backgroundPositionY = (-100 - offset * 0.1) + "px";
    if (contact) contact.style.backgroundPositionY = (-100 - offset * 0.5) + "px";
  });
}