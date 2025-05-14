// Website animations (fade-in and movement)
document.addEventListener("DOMContentLoaded", () => {
  const headingTitle = document.querySelector("#headingTitle");
  headingTitle.classList.add("active");
});

function scrollFunction() {
  const aboutTitle = document.querySelector("#aboutTitle");
  const aboutParagraph = document.querySelector("#aboutParagraph");
  const howToHeading = document.querySelector("#howToHeading");
  const howToParagraph = document.querySelector("#howToParagraph");

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutTitle.classList.add("active");
        titleObserver.unobserve(aboutTitle);
      }
    });
  });
  
  const paragraphObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          aboutParagraph.classList.add("active");
          paragraphObserver.unobserve(aboutParagraph);
        }, 500);
      }
    });
  });
  
  const howToHeadingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        howToHeading.classList.add("active");
        howToHeadingObserver.unobserve(howToHeading);
      }
    });
  });
  
  const howToParagraphObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          howToParagraph.classList.add("active");
          howToParagraphObserver.unobserve(howToParagraph);
        }, 500);
      }
    });
  });
  
  titleObserver.observe(aboutTitle);
  paragraphObserver.observe(aboutParagraph);
  howToHeadingObserver.observe(howToHeading);
  howToParagraphObserver.observe(howToParagraph);
}
scrollFunction();