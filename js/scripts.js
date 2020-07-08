//set a default slideIndex = 0
var slideIndex = 0;

//define the slideShow function:
function slideShow() {
  var i;

  //hide the slides
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //start the slideshow
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "grid";
  setTimeout(slideShow, 2000); // SLIDESHOW SPEED HERE
}

//start the function slideShow
slideShow();
