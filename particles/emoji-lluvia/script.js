const allEmojis = document.querySelectorAll(".emoji");
const emojiWrap = document.querySelector(".emojiWrapper");

const emojis = ["🤭", "😊", "🖕", "💕", "👍", "🙈", "👿", "🥶", "👽", "❤️"];

_.range(10).forEach((num) => {
  const div = document.createElement("div");
  div.classList.add("emoji");
  div.textContent = `${emojis[num]}`;
  div.style.animation = `lluvia ${_.random(2000, 4000)}ms infinite linear`;
  div.style.animationDelay = `${_.random(4000)}ms`;
  emojiWrap.appendChild(div);
});
