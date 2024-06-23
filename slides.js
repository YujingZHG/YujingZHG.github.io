let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot_active";
}


// click to fold the image displayzone1
var photoGal01=document.getElementById("fold01");
function foldPhoto01(){
    if(photoGal01.style.display=="none"){
        photoGal01.style.display="block";
    }
    else
    photoGal01.style.display="none";
}
var photoGal02=document.getElementById("fold02");
function foldPhoto02(){
    if(photoGal02.style.display=="none"){
        photoGal02.style.display="block";
    }
    else
    photoGal02.style.display="none";
}