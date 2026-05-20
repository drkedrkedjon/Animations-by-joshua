const btn = document.querySelector(".btn");
const starLayer = document.querySelector(".starLayer");

function range(start, stop = false) {
  const rangeArr = [];

  if (!stop) {
    stop = start + 1;
    start = 1;
  }

  for (let i = start; i < stop; i++) {
    rangeArr.push(i);
  }

  return rangeArr;
}

function createStars() {
  const stars = [];
  range(10).forEach((num) => {
    const top = Math.floor(Math.random() * 101);
    const left = Math.floor(Math.random() * 101);
    const star = document.createElement("div");
    star.innerText = "⭐";
    star.classList.add("star");
    star.style.fontSize = `${Math.floor(Math.random() * 3) + 1}rem`;
    star.style.top = top + "%";
    star.style.left = left + "%";
    // Este translate mueve la estrella a la izquierda o arriba con translate para que no desborda, osea que se queda dentro de container y sin overflow
    star.style.transform = `translate(${-left}%, ${top * -1}%)`;
    starLayer.appendChild(star);
    stars.push(star);
  });

  setTimeout(() => {
    stars.forEach((star) => {
      star.remove();
    });
  }, 3000);
}

btn.addEventListener("click", createStars);
