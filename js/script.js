var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 15000); // Change image every 2 seconds
}

function iconSideMenu(x) {
    var nav = document.querySelector('nav ul');
    var menu = document.querySelector('navbar');
    var body = document.querySelector('body');
    
    x.classList.toggle('change');
    nav.classList.toggle('slide');
    body.classList.toggle('hide-scroll');
    body.classList.toggle('brigthness-body');

}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  var botnav = document.getElementById("navbarId")
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    botnav.style.display = "flex";

  } 
  else {
    botnav.style.display = "none";

  }
}