const burger = document.querySelector(".burger");
const nMenu = document.querySelector(".n-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nMenu.classList.toggle("active");
})

document.querySelectorAll(".n-link").forEach(n => n.
addEventListener("click", () => {
  burger.classList.remove("active");
  nMenu.classList.remove("active");
}))

anime({
  targets: '#title path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});
