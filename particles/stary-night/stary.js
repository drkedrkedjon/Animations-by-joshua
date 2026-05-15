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
  range(10).forEach((num) => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(range(10));

    const star = document.createElement("div");
    star.innerText = "⭐";
    star.classList.add("star");
    star.style.top = Math.floor(Math.random() * 100) + 1 + "%";
    star.style.left = Math.floor(Math.random() * 100) + 1 + "%";
    starLayer.appendChild(star);
  });
}

btn.addEventListener("click", createStars);
