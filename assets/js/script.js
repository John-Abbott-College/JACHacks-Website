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


const canvas = document.getElementById("Matrix");
const context = canvas.getContext('2d');
const intro = document.querySelector(".intro");

let animationInterval;

const getIntroBottom = () => {
  return intro.getBoundingClientRect().bottom + window.scrollY; 
};

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'rgb(100, 100, 100, 1)';
  context.font = fontSize + 'px monospace';

  const introBottom = getIntroBottom();

  for (let i = 0; i < raindrops.length; i++){
    const text = charset.charAt(Math.floor(Math.random() * charset.length));
    context.fillText(text, i * fontSize, raindrops[i] * fontSize);

    if (raindrops[i] * fontSize > introBottom && Math.random() > 0.975) {
      raindrops[i] = 0;
    }
    raindrops[i]++;
  }
};

const initializeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = getIntroBottom();
  const columns = Math.floor(canvas.width / fontSize); //how many chars fit on the screen horizontally
  raindrops.length = columns;
  raindrops.fill(1);
  clearInterval(animationInterval);
  animationInterval = setInterval(draw, 50);
}


const charset = '01';
const fontSize = 16;
const raindrops = [];

initializeCanvas();



window.addEventListener('resize', initializeCanvas);