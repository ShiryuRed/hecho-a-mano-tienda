const btnClose = document.querySelector('.btn-close-menu');
const btnOpen = document.querySelector('.btn-open-menu');
const menu = document.querySelector('.nav-responsive');
const boddy = document.querySelector(".body");
 
btnOpen.addEventListener('click', () => {
    btnOpen.classList.add("close");
    btnClose.classList.remove("close");
    menu.classList.add("nav-responsive-open");
    boddy.classList.add("no-scroll");
});

btnClose.addEventListener('click', () => {
    btnClose.classList.add("close");
    btnOpen.classList.remove("close");
    menu.classList.remove("nav-responsive-open");
    boddy.classList.remove("no-scroll");
});


const navResponsiveLi = document.querySelectorAll(".nav-responsive-li");


navResponsiveLi.forEach(li => {
    li.addEventListener('click', () => {
        btnClose.classList.add("close");
        btnOpen.classList.remove("close");
        boddy.classList.remove("no-scroll");
        setTimeout(function(){
            menu.classList.remove("nav-responsive-open");
            },600)
    });
});



// Plantillas modal
const modalPlantillas = document.querySelector(".modal-plantillas");
const closeModal = document.querySelector(".close-modal");

const contentPlantillas = document.querySelector(".plantilla-content")


function openModalFun() {
    modalPlantillas.removeAttribute("hidden");
    boddy.classList.add("no-scroll");
    setTimeout(function(){
     modalPlantillas.classList.add("open-modal");
     },300)
     setTimeout(function(){
         contentPlantillas.classList.add("open-pla-content");
         closeModal.classList.add("anim-close");
    },400)
}

function closeModalFun() {
    contentPlantillas.classList.remove("open-pla-content");
    closeModal.classList.remove("anim-close");
    boddy.classList.remove("no-scroll");
    setTimeout(function(){
    modalPlantillas.classList.remove("open-modal");
    },300)
    setTimeout(function(){
    modalPlantillas.setAttribute("hidden", true);
    },400)
}


function enviarMensajeWhatsApp(mensaje) {
    const numeroTelefono = 'tu_numero_de_telefono'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje

  
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp);
  }

// JavaScript
// const images = ['multimedia/images/materiales/28.png', 'multimedia/images/materiales/29.png', 'multimedia/images/materiales/26.png']; // Lista de imágenes
// let currentImage = 0; // Imagen actual
// const dots = document.querySelectorAll('.dot');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');
// const imageContainer = document.getElementById('imageContainer');

// function generateDots() {
//     images.forEach((_, index) => {
//         const dot = document.createElement('span');
//         dot.classList.add('dot');
//         dot.setAttribute('data-index', index); // Asigna un índice al dot
//         dotsContainer.appendChild(dot);
//     });
// }

// prevButton.addEventListener('click', () => {
//     currentImage = (currentImage - 1 + images.length) % images.length;
//     updateImage();
// let linkas = imageContainer.style.backgroundImage;
//     console.log(linkas)
// });
// // Asigna eventos a los dots
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentImage = index;
//         updateImage();
//     });
// });
// nextButton.addEventListener('click', () => {
//     currentImage = (currentImage + 1) % images.length;
//     updateImage();
//     let linkas = imageContainer.style.backgroundImage;
//     console.log(linkas)
// });

// function updateImage() {
//     imageContainer.style.backgroundImage = `url(${images[currentImage]})`;
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentImage);
//     });
// }
// imageContainer.addEventListener('click', () => {
//     let linkas2 = imageContainer.style.backgroundImage;
//     console.log(linkas2)
// })



