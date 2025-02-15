let language = document.getElementsByTagName("html")[0].getAttribute("lang");
if ("fr" == language)
  var aText = new Array("26 et 27 Avril 2025 • Cégep John Abbott");
else aText = new Array("April 26-27, 2025 • John Abbott College");
var iRow,
  iSpeed = 100,
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
const glowButton = document.querySelector(".glowbutton"),
  mainLogo = document.querySelector(".main-logo"),
  typedText = document.querySelector("#typedtext"),
  buttonAfter = document.querySelector(".glowbutton::after");
glowButton.addEventListener("mouseover", () => {
  (mainLogo.style.filter = "drop-shadow(0px -20px 3px rgba(0, 0, 0, 0.885)) "),
    (typedText.style.filter = "drop-shadow(0px -0.6em 0.1em rgb(0, 0, 0))"),
    glowButton.classList.add("afterHover");
}),
  glowButton.addEventListener("mouseout", () => {
    (mainLogo.style.filter = "drop-shadow(0px -20px 6px rgba(0, 0, 0, 0.885))"),
      (typedText.style.filter = "drop-shadow(0px -0.6em 0.2em rgb(0, 0, 0))"),
      glowButton.classList.remove("afterHover");
  });
const gear1 = document.querySelector("#gear1"),
  gear2 = document.querySelector("#gear2"),
  observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      e.isIntersecting
        ? ((gear1.style.animationPlayState = "running"),
          (gear2.style.animationPlayState = "running"))
        : ((gear1.style.animationPlayState = "paused"),
          (gear2.style.animationPlayState = "paused"));
    });
  });
observer.observe(gear1), observer.observe(gear2);
