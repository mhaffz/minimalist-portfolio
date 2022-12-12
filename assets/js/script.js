const theme = document.getElementById("theme").children;
const image = document.querySelector(".section__img");

function animationImage () {
  image.style.animation = "";
  setTimeout(() => image.style.animation = "flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both", 1);
}

function changeImage (number) {
  if (number == 1) image.src = "./img/main01.svg";
  if (number == 2) image.src = "./img/main02.svg";
  if (number == 3) image.src = "./img/main03.svg";
  if(number == 4) image.src = "./img/main04.svg";
}

function changeTheme() {
  theme[0].onclick = function () {
    document.body.style.background = '#FFE5D9';
    changeImage(1);
    animationImage();
  }
  theme[1].onclick = function () {
    document.body.style.background = '#FEC89A';
    changeImage(2);
    animationImage();
  }
  theme[2].onclick = function () {
    document.body.style.background = '#EFF6E0';
    changeImage(3);
    animationImage();
  }
  theme[3].onclick = function () {
    document.body.style.background = '#B3DEE2';
    changeImage(4);
    animationImage();
  }
}

changeTheme();