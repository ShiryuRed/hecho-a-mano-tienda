

// script.js 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const filterButton = document.getElementById('filter-button');

    const imgModalContainer = document.querySelector(".img-modal-container");
    const imgGliderModal = document.querySelector(".img-glider-modal");
    const h2Container = document.querySelector(".h2-container");
    const price = document.querySelector(".price");
    const medidasMaterial = document.querySelector(".medidas");
    const descripcionMaterial = document.querySelector(".descripcion-material");
    const firstImageModal = document.querySelector('.first-img-modal');

    
    function createCard(imageSrc, name, number, tagName, containerId, medidas, description, imgUrls) {
        // Crear un contenedor para la tarjeta
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-tag', tagName);

        // Crear un contenedor para la imagen
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-card-container';
        card.appendChild(imgContainer);

        var imgModalUrls = imgUrls

        // // Crear y añadir la imagen a la tarjeta
        const img = document.createElement('img');
        img.src = imageSrc;
        img.setAttribute('alt', name);
        imgContainer.appendChild(img);

    
        // Crear y añadir el nombre a la tarjeta
        const cardName = document.createElement('h3');
        cardName.textContent = name;
        card.appendChild(cardName);
    
        // Crear y añadir el número a la tarjeta
        const cardNumber = document.createElement('p');
        cardNumber.textContent = `${number}`;
        card.appendChild(cardNumber);

        // añador medidas a la tarjeta
        const cardMedidas = medidas; 
        
        // añador medidas a la tarjeta
        const cardDescription = description;
    
        // Crear y añadir el botón a la tarjeta
        const button = document.createElement('button');
        button.textContent = 'Más información';
        button.className = 'btn-card';
        let cardData = { undefined};
        button.addEventListener('click', () => {
            cardData = {
                imgSrc: imageSrc,
                name: name,
                number: number,
                tagName: tagName
            };
            
        });
        card.appendChild(button);

    
        //Añadir la tarjeta al contenedor especificado
        const cardContainer = document.getElementById(containerId);
        cardContainer.appendChild(card);
          
      
        button.addEventListener('click', () => {
            openModalFun();


            firstImageModal.setAttribute('alt', name);
            firstImageModal.setAttribute('src', imageSrc);

            const titleModal = document.createElement('h2');
            titleModal.textContent = `${name}`;
            h2Container.appendChild(titleModal);

            const precioModal = document.createElement('p');
            precioModal.textContent = `${number}`;
            price.appendChild(precioModal);
            
            const medidasInfo = document.createElement('p');
            medidasInfo.textContent = `${medidas}`;
            medidasMaterial.appendChild(medidasInfo); 
            
            const descriptionInfo = document.createElement('p');
            descriptionInfo.textContent = `${description}`;
            descripcionMaterial.appendChild(descriptionInfo);

            
            const imgModal = document.createElement('img');
            imgModalUrls.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.classList.add('img-gallery-modal');
                img.setAttribute('alt', 'img gallery')
                imgGliderModal.appendChild(img);
            });
            

            const imagesGalleryModal = imgGliderModal.querySelectorAll('.img-gallery-modal');

            closeModal.addEventListener('click', () => {
                closeModalFun();
                setTimeout(function(){ 
                    imgModal.remove();
                    titleModal.remove();
                    precioModal.remove();
                    medidasInfo.remove();
                    descriptionInfo.remove();
                    imagesGalleryModal.forEach(img => {
                        img.remove();
                    });
                },400)
            });
        });
        
        

    }
    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const tagName = card.getAttribute('data-tag').toLowerCase();
            if (tagName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterButton.addEventListener('click', filterCards);


    let medidaLambrin = '0.16 * 2.90 cm'
    let medidaMarmol = '1.20 * 2.44 cm'

    let descripcionLambrin = 'Recopilamos información para brindar mejores servicios a todos nuestros usuarios: '
    let descripcionMarmol = 'Cuando no ha accedido a su Cuenta de Google, almacenamos la información que recopilamos con identificadores únicos que están vinculados con el navegador, '

    const imgLamChocolate = ['multimedia/images/materiales/28.png', 'multimedia/images/materiales/29.png'];
    const imgMarNegro = ['multimedia/images/materiales/33.png', 'multimedia/images/materiales/34.png'];

    // Tarjetas lambrin    
    createCard('multimedia/images/materiales/lam-chocolate.jpg', 'Lambrin color chocolate', '$300 pz', 'tag1', 'card-lambrin', medidaLambrin, descripcionLambrin, imgLamChocolate);
    createCard('multimedia/images/materiales/28.png', 'Lambrin color madera', '$300 pz', 'tag1', 'card-lambrin', medidaLambrin, descripcionLambrin, imgLamChocolate);
    createCard('multimedia/images/materiales/29.png', 'Lambrin color carbon', '$300 pz', 'tag1', 'card-lambrin', medidaLambrin, descripcionLambrin, imgLamChocolate);
    // Tarjetas marmol
    createCard('multimedia/images/materiales/33.png', 'Mármol PVC color negro', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarNegro);
    createCard('multimedia/images/materiales/34.png', 'Mármol PVC color blanco', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarNegro);
    createCard('multimedia/images/materiales/35.png', 'Mármol PVC color dorado', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarNegro);
    // Tarjetas mas materiales
    createCard('multimedia/images/materiales/26.png', 'Material 1', '$900', 'tag1', 'card-otros-materiales', medidaLambrin, descripcionLambrin, imgLamChocolate);
    createCard('multimedia/images/materiales/27.png', 'Material 2', '$500', 'tag1', 'card-otros-materiales', medidaMarmol, descripcionMarmol, imgMarNegro);
    createCard('multimedia/images/materiales/31.png', 'Material 3', '$500', 'tag1', 'card-otros-materiales', medidaLambrin, descripcionLambrin, imgLamChocolate);
});



window.addEventListener('scroll', function() {
    let btnWhatsAppFix = document.querySelector(".btn-whatsapp-fixed");
    let offsetHeight = document.getElementById('body').offsetHeight;
    if (window.scrollY > 500) { //Cantidad de pixeles que se mueve
        btnWhatsAppFix.classList.add('move-btn');
    } else {
        btnWhatsAppFix.classList.remove('move-btn');
    } if (window.scrollY > 3300) {
        btnWhatsAppFix.classList.remove('move-btn'); //Cantidad de pixeles que se mueve 
    }
});


