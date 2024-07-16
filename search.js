

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
    // const firstImageModal = document.querySelector('.first-img-modal');
    const modalImgContainer = document.querySelector('.modal-img');
    const modalImgContent = document.querySelector('.modal-img-container');
    const imgModal = document.querySelector('.imgModal');

    const bgImg = document.querySelector('.background-1');
    const bgi = [
        'url(multimedia/images/backgrounds/bg-1.HEIC',
        'url(multimedia/images/backgrounds/bg-2.jpg',
        'url(multimedia/images/backgrounds/bg-3.jpg',
        'url(multimedia/images/backgrounds/bg-4.jpg',
        'url(multimedia/images/backgrounds/bg-5.jpg',
        'url(multimedia/images/backgrounds/bg-6.jpg'
    ];
    const randomBackground = bgi[Math.floor(Math.random() * bgi.length)];
    bgImg.style.backgroundImage = randomBackground;
    setInterval(function() {
        const randomBackground = bgi[Math.floor(Math.random() * bgi.length)];
        bgImg.style.backgroundImage = randomBackground;
        
    },5000)

    function openImgModal() {
        modalImgContainer.removeAttribute("hidden");
            setTimeout(function(){
            modalImgContainer.classList.add("modal-background");
            modalImgContent.classList.add('modal-content-on');
        },100);
    };
    function closeImgModal() {
        modalImgContent.classList.remove('modal-content-on');
        modalImgContainer.classList.remove("modal-background");
        setTimeout(function(){
            modalImgContainer.setAttribute("hidden", "true");
        },600);
    }
    
    function createCard(imageSrc, name, number, tagName, containerId, medidas, description, imgUrls) {
        // Crear un contenedor para la tarjeta
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-tag', tagName);

        // Crear un contenedor para la imagen
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-card-container';
        card.appendChild(imgContainer);

        const imgModalUrls = imgUrls;

        // // Crear y añadir la imagen a la tarjeta
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('modalImg')
        img.setAttribute('alt', name);
        img.setAttribute('loading', 'lazy');
        imgContainer.appendChild(img);
        const modalImg = document.querySelectorAll('.modalImg')

        modalImg.forEach(images => {
            images.addEventListener('click', () => {
              let src = images.getAttribute('src');
              imgModal.setAttribute('src', src);
              openImgModal()
            });
              
        });
        modalImgContainer.addEventListener ("click", () => {
            closeImgModal();
        })

    
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

            //se crea la primera imagen
            firstImage = imageSrc;
            // firstImageModal.setAttribute('alt', name);
            // firstImageModal.setAttribute('src', imageSrc);

            //se crea el titulo
            const titleModal = document.createElement('h2');
            titleModal.textContent = `${name}`;
            h2Container.appendChild(titleModal);

            //se crea el precio
            const precioModal = document.createElement('p');
            precioModal.textContent = `${number}`;
            price.appendChild(precioModal);
            
            //se crean las medidas
            const medidasInfo = document.createElement('p');
            medidasInfo.textContent = `${medidas}`;
            medidasMaterial.appendChild(medidasInfo); 
            
            //se crea la descripcion
            const descriptionInfo = document.createElement('p');
            descriptionInfo.textContent = `${description}`;
            descripcionMaterial.appendChild(descriptionInfo);

            

            //se agregan las imagenes a la galeria
            // const imgModal = document.createElement('img');
            // imgModalUrls.forEach(imageUrl => {
            //     const img = document.createElement('img');
            //     img.src = imageUrl;
            //     img.classList.add('img-gallery-modal');
            //     img.setAttribute('alt', 'img gallery')
            //     imgGliderModal.appendChild(img);
            // });
            let images = [].concat(imgModalUrls);
            // console.log(firstImage);
            // console.log(images)
            images.splice(0, 0, firstImage);
            
            // const imagesGalleryModal = imgGliderModal.querySelectorAll('.img-gallery-modal');


                     // Lista de imágenes
            let currentImage = 0; // Imagen actual
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');
            const dotsContainer = document.getElementById('dotsContainer');
            const imageContainer = document.getElementById('img-glider-modal');


            images.forEach((a, index) => {
                    const dot = document.createElement('span');
                    dot.classList.add('dot');
                    dot.setAttribute('data-index', index); // Asigna un índice al dot
                    dotsContainer.appendChild(dot);
                });
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        currentImage = index;
                        updateImage();
                    });
                });

                const dotsOnModal = document.querySelectorAll('.dot');
                prevButton.addEventListener('click', () => {
                    currentImage = (currentImage - 1 + images.length) % images.length;
                    updateImage();
                    // let linkas = imageContainer.style.backgroundImage;
                    // console.log(linkas)
                });
                // Asigna eventos a los dots
                
                nextButton.addEventListener('click', () => {
                    currentImage = (currentImage + 1) % images.length;
                    updateImage();
                    // let linkas = imageContainer.style.backgroundImage;
                    // console.log(linkas)
                });
                function updateImage() {
                    imageContainer.style.backgroundImage = `url(${images[currentImage]})`;
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentImage);
                    });
                };
                updateImage()
                imageContainer.addEventListener('click', () => {
                    let linkas2 = imageContainer.style.backgroundImage;
                    console.log(linkas2);
                    const urlLimpia = linkas2.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
                    imgModal.setAttribute('src', urlLimpia);
                    openImgModal();
                })


           


            closeModal.addEventListener('click', () => {
                closeModalFun();
                setTimeout(function(){
                    images = imgModalUrls;
                    titleModal.remove();
                    precioModal.remove();
                    medidasInfo.remove();
                    descriptionInfo.remove();
                    dotsOnModal.forEach(dot => {
                        dot.remove();
                    });
                },400)
            });
            modalPlantillas.addEventListener('click', () => {
                if (event.target === modalPlantillas) {
                    closeModalFun();
                        setTimeout(function(){
                            images = imgModalUrls;
                            titleModal.remove();
                            precioModal.remove();
                            medidasInfo.remove();
                            descriptionInfo.remove();
                            dotsOnModal.forEach(dot => {
                                dot.remove();
                            });
                        },400)
                  }
                
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

    let imgLamChocolate = ['multimedia/images/materiales/28.png', 'multimedia/images/materiales/29.png'];
    let imgMarNegro = ['multimedia/images/materiales/33.png', 'multimedia/images/materiales/34.png', 'multimedia/images/materiales/35.png'];

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
    createCard('multimedia/images/materiales/30.png', 'Material 4', '$600', 'tag1', 'card-otros-materiales', medidaMarmol, descripcionLambrin, imgMarNegro);
});



window.addEventListener('scroll', function() {
    let btnWhatsAppFix = document.querySelector(".btn-whatsapp-fixed");
    let offsetHeight = document.getElementById('body').offsetHeight;
    if (window.scrollY > 500) { //Cantidad de pixeles que se mueve
        btnWhatsAppFix.classList.add('move-btn');
    } else {
        btnWhatsAppFix.classList.remove('move-btn');
    } if (window.scrollY > 3100) {
        btnWhatsAppFix.classList.remove('move-btn'); //Cantidad de pixeles que se mueve 
    }
});


