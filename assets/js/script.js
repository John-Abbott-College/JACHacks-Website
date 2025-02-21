document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".pop-up-image");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  images.forEach((image) => {
    observer.observe(image);
  });
});
