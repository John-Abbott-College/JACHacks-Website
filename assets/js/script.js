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
    
    let cursor = iIndex === aText.length - 1 && iTextPos === iArrLength ? "" : "_";
    e.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + cursor;
    
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      if (++iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
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
