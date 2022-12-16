const image = document.querySelector(".section__img");

function animationImage () {
  setTimeout(() => image.style.animation = "flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both", 1);
  setTimeout(() => image.style.animation = null, 325);
}

function changeImage (number) {
  if (number == 1) image.src = "./img/main01.svg";
  if (number == 2) image.src = "./img/main02.svg";
  if (number == 3) image.src = "./img/main03.svg";
  if(number == 4) image.src = "./img/main04.svg";
}

function changeColor (number) {
  if (number == 1) document.body.style.background =  "#FFE5D9";
  if (number == 2) document.body.style.background =  "#FEC89A";
  if (number == 3) document.body.style.background =  "#EFF6E0";
  if(number == 4) document.body.style.background =  "#B3DEE2";
}

function changeTheme(indice) {
  changeColor(indice);
  animationImage()
  changeImage(indice);
}
