
var imageList = ["mountain.jpg", "forest.jpg", "lake.jpg", "nature.jpg", "ocean.jpg", "lights.jpg", "mountains.jpg", "valley.jpg", "snow.jpg"];
var colorList = ["#717171", "#1e90ff", "#f7260a", "#0e11e6", "#f0dd11", "#09e9ed", "#bd08b4", "#faa405", "#63041c", "#062b18"];
var count = 0;
var dom = document.getElementById("banners");
var dom1 = document.getElementById("dotbtn");
var dots = document.getElementsByClassName("dot");
// Get the root element
var r = document.querySelector(':root');

function currentSlide(n, isDoted) {
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  bannersInit(n);
  if (isDoted) {
    count = n + 1;
  }
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
  count++;
  dotColorChange();
}
currentSlide(count, false);

setInterval(function () {
  if (count === imageList.length) {
    count = 0;
  }
  currentSlide(count, false);
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

// Create a function for setting variable values
function dotColorChange() {
  // Random color pick between 0 and max i.e. 0 and 9
  var randomColorDot = "";
  var randomColorPreNext = "";
  var max = 9;
  var indexNumDot = Math.floor(Math.random() * (max + 1));
  var indexNumPreNext = Math.floor(Math.random() * (max + 1));

  randomColorDot = colorList[indexNumDot];
  randomColorPreNext = colorList[indexNumPreNext];

  // Set the value of variable --gray and --white to another randomly generated values
  r.style.setProperty('--gray', randomColorDot);
  r.style.setProperty('--white', randomColorPreNext);
}