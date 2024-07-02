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