const image = document.querySelector(".section__img");
const images = ['./img/main01.svg', './img/main02.svg', './img/main03.svg', './img/main04.svg'];
const colors = ['#FFE5D9', '#FEC89A', '#EFF6E0', '#B3DEE2'];

function animationImage () {
  setTimeout(() => image.style.animation = "flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both", 1);
  setTimeout(() => image.style.animation = null, 325);
}

function changeTheme(indice) {
  document.body.style.background = colors[indice];
  animationImage()
  image.src = images[indice]
}
