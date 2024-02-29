document.querySelectorAll(".blinker").forEach((element) => {
  const randomDuration = Math.random() * 2 + 1;
  element.style.animationDuration = `${randomDuration}s`;
});

window.onload = function () {
  document.body.classList.add("whenLoaded");
};
