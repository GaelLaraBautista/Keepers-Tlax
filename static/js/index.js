// Funcionaliad del menu de navegacion
function toggleMenu(){
    const menu = document.querySelector('.nav-navigator');
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }   
}


// Slider con transiciones suaves y navegación manual
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
// Cambio automatico de slides cada 8 segundos
setInterval(() => {
    plusSlides(1);
}, 8000); 

// Funcionalidad del boton "Back to Top"
const backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Funcionalidad para añadir productos al carrito
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText;
        const productPrice = button.parentElement.querySelector('p').innerText;
        alert(`Producto añadido: ${productName} - ${productPrice}`);
    });
});