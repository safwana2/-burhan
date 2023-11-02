// JavaScript code for interactivity
let slideIndexSecond = 0;
showSlidesSecond();
function showSlidesSecond() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndexSecond++;
    if (slideIndexSecond > slides.length) {slideIndexSecond = 1}
    slides[slideIndexSecond-1].style.display = "block";
    setTimeout(showSlidesSecond, 5000); // Change image every 2 seconds
  }