
var imageList = ["mountain.jpg", "forest.jpg", "lake.jpg", "nature.jpg", "ocean.jpg", "lights.jpg", "mountains.jpg", "valley.jpg", "snow.jpg"];
var count = 0;
var dom = document.getElementById("banners");
var dom1 = document.getElementById("dotbtn");
var dots = document.getElementsByClassName("dot");

function currentSlide(n, isDoted) {
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (isDoted) {
    count = n;
  }
  bannersInit(n);
}

for (var i = 0; i < imageList.length; i++) {
  dom1.innerHTML += `<span class='dot' onClick='currentSlide(${i}, true)'></span>`
}

function bannersInit(index) {
  dom.innerHTML = `<img class='fade' src='./assets/${imageList[index]}'/>`;
  if (index === 0) {
    dots[imageList.length - 1].className = dots[imageList.length - 1].className.replace(" active", "");
    dots[index].className += " active";
  }
  if (index !== 0) {
    dots[index - 1].className = dots[index - 1].className.replace(" active", "");
    dots[index].className += " active";
  }
}
currentSlide(count++, false);

setInterval(function () {
  if (count === imageList.length) {
    count = 0;
  }
  currentSlide(count++, false);
}, 5000)

function preNextSlide(ind) {
  count = count + ind;
  if (count >= imageList.length) {
    count = 0;
  }
  else if (count < 0) {
    count = imageList.length - 1;
  }
  currentSlide(count, false);
}
