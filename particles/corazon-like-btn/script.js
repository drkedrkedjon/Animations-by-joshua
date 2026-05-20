const particleButton = document.querySelector(".particleButton");

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

function createParticles() {
  const allParticulas = [];
  const magnitude = 48;

  range(5).forEach(() => {
    const particula = document.createElement("div");
    particula.classList.add("particula");
    const x = _.random(-magnitude, magnitude);
    const y = _.random(-magnitude, magnitude);
    particula.style.transform = `translate(${x}px, ${y}px)`;
    particleButton.appendChild(particula);
    allParticulas.push(particula);
  });

  setTimeout(() => {
    allParticulas.forEach((particula) => particula.remove());
  }, 2000);
}

particleButton.addEventListener("click", createParticles);
