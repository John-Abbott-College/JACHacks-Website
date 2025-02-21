let language = document.getElementsByTagName("html")[0].getAttribute("lang");
if ("fr" == language) var aText = new Array("26-27 Avril");
else aText = new Array("April 26-27");
var iRow,
  iSpeed = 140,
  iIndex = 0,
  iArrLength = aText[0].length,
  iScrollAt = 20,
  iTextPos = 0,
  sContents = "";
function typewriter() {
  (sContents = " "), (iRow = Math.max(0, iIndex - iScrollAt));
  for (var e = document.getElementById("typedtext"); iRow < iIndex; )
    sContents += aText[iRow++] + "<br />";
  (e.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_"),
    iTextPos++ == iArrLength
      ? ((iTextPos = 0),
        ++iIndex != aText.length &&
          ((iArrLength = aText[iIndex].length),
          setTimeout("typewriter()", 500)))
      : setTimeout("typewriter()", iSpeed);
}
typewriter();

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
