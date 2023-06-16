const autoplayInterval = 3500;
var autoplay = true;
var autoplayTimer = null;
var newIndex = 1;
const slides = [
    // Arrays describing the ids of each picture in a slideshow
    // We'll loop through these to get ahold of the ids :-).
    ['slide1', 'slide2', 'slide3', 'slide4'],
    ['slide5', 'slide6', 'slide7', 'slide8'],
    ['slide9', 'slide10', 'slide11', 'slide12'],
    ['slide13', 'slide14', 'slide15', 'slide16'],
];
 
if (autoplay) {
     autoplayTimer = setInterval(function() {
     newIndex++;
     navigateSliders();
   }, autoplayInterval);
}
 
function resetSlider() { 
  clearInterval(autoplayTimer);
}
 
function navigateSliders() {
  // loop through each array of slides and change the value
  slides.forEach(function(slideArray) {
    const display1 = document.getElementById(slideArray[0]);
    const display2 = document.getElementById(slideArray[1]);
    const display3 = document.getElementById(slideArray[2]);
    const display4 = document.getElementById(slideArray[3]);
    if (newIndex == 1) {
        display1.checked = true;
    } else if (newIndex == 2) {
        display2.checked = true;
    } else if (newIndex == 3) {
        display3.checked = true;
    } else if (newIndex == 4) {
        display4.checked = true;
    }
  });
  // if newIndex is 4 we should reset
  if (newIndex == 4) {
    newIndex = 0;
  }
}

