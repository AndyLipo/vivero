// Obtener elementos del DOM
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Agregar eventos de interacción con el mouse
dropdownToggle.addEventListener('mouseenter', showDropdownMenu);
dropdownToggle.addEventListener('mouseleave', hideDropdownMenu);
dropdownMenu.addEventListener('mouseenter', showDropdownMenu);
dropdownMenu.addEventListener('mouseleave', hideDropdownMenu);

// Función para mostrar el menú desplegable
function showDropdownMenu() {
  dropdownMenu.style.display = 'block';
}

// Función para ocultar el menú desplegable
function hideDropdownMenu() {
  dropdownMenu.style.display = 'none';
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//imagenes

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 2000); // Cambiar cada 2 segundos (2000 milisegundos)
// }

// function plusSlides(n) {
//   slideIndex += n;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   } else if (slideIndex < 1) {
//     slideIndex = slides.length;
//   }
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (var i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// function currentSlide(n) {
//   slideIndex = n;
//   showSlides();
// }
