

// script.js 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const filterButton = document.getElementById('filter-button');

    const buttonLinkModal = document.querySelector('.button-modal')
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
    const buttonWhatsApp = document.querySelector('.btn-modal-whatsapp');

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
    
    function createCard(imageSrc, name, number, tagName, containerId, medidas, description, imgUrls, estado) {
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
        img.classList.add('modalImg');
        //estado del material
        const estadoMaterial = estado 
        if (estadoMaterial == 'proximamente') { 
            imgContainer.classList.add('img-card-container-proximamente');
        } if (estadoMaterial == 'agotado') {
            imgContainer.classList.add('img-card-container-agotado');
        } if (estadoMaterial == 'disponible') {
            imgContainer.classList.add('ci')
        }
        img.setAttribute('alt', name);
        img.setAttribute('loading', 'lazy');
        imgContainer.appendChild(img);
        const modalImg = document.querySelectorAll('.modalImg');

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
            // se guarda el nombre de el material
            materialName = name;
            // firstImageModal.setAttribute('alt', name);
            // firstImageModal.setAttribute('src', imageSrc);

            //se crea el titulo
            const titleModal = document.createElement('h1');
            titleModal.textContent = `${name}`;
            h2Container.appendChild(titleModal);

            //se crea el precio
            const precioModal = document.createElement('h4');
            precioModal.textContent = `${number}`;
            price.appendChild(precioModal);
            
            //se crean las medidas
            const medidasInfo = document.createElement('h4');
            medidasInfo.textContent = `${medidas}`;
            medidasMaterial.appendChild(medidasInfo); 
            
            //se crea la descripcion
            const descriptionInfo = document.createElement('p');
            descriptionInfo.textContent = `${description}`;
            descripcionMaterial.appendChild(descriptionInfo);

            if (estadoMaterial == 'proximamente') { 
                buttonLinkModal.setAttribute('hidden', true);
            } if (estadoMaterial == 'agotado') {
                buttonLinkModal.setAttribute('hidden', true);
            } if (estadoMaterial == 'disponible') {
                buttonLinkModal.removeAttribute('hidden');
            }
            
            //se agregan los links a whatsapp

        //   function enviarMensajeWhatsApp() {
        //         const numeroTelefono = '+527531096879';
        //         let mensaje = ' '
        //         mensaje = `¡Hola! Me gustaría adquirir el `;
        //         let urlWhatsApp = ' '
        //         urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje) + name}`;
        //         window.open(urlWhatsApp);
        //         urlWhatsApp.replace(urlWhatsApp, ' ')
        //     }
            //se agregan los links a whatsapp
            function abrirEnlace(parametro) {
                const texto = `¡Hola! Me gustaría adquirir el ${parametro}`;
                const numeroTelefono = '+527531096879';
                const enlace = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(texto)}`;
                window.open(enlace, '_blank');
            }

            buttonWhatsApp.addEventListener('click', () => abrirEnlace(materialName));

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


    let medidaLambrin = '16cm * 290 cm'
    let medidaMarmol = '120cm * 244 cm'

    let descripcionLambrin = `Renueva tus espacios con el elegante Lambrín WPC de imitación madera.
    Nuestro material combina la estética natural de la madera con las ventajas de un compuesto de madera y plástico (WPC), 
    ofreciendo una solución moderna y duradera para cualquier ambiente.`
    let descripcionMarmol = 'Transforma tus espacios con nuestras elegantes láminas de imitación de mármol en PVC. Este material de alta calidad ofrece la sofisticación del mármol a un costo accesible, ideal para cualquier proyecto de renovación.'

    let imgLamNeg = ['multimedia/images/materiales/lambrin/13.png', 'multimedia/images/materiales/lambrin/15.png','multimedia/images/materiales/lambrin/16.png'];
    let imgLamMad = ['multimedia/images/materiales/lambrin/18.png', 'multimedia/images/materiales/lambrin/19.png', 'multimedia/images/materiales/21.jpg'];
    let imgMarNegro = ['multimedia/images/materiales/marmol/4.png', 'multimedia/images/materiales/22.jpg', 'multimedia/images/materiales/24.jpg'];
    let imgMarBlanco = ['multimedia/images/materiales/marmol/1.png', 'multimedia/images/materiales/20.jpg', 'multimedia/images/materiales/25.jpg'];
    let imgMarBlancoYNegro = ['multimedia/images/materiales/marmol/8.png', 'multimedia/images/materiales/23.jpg', 'multimedia/images/materiales/24.jpg'];
    let imgMarRayado = ['multimedia/images/materiales/marmol/9.png', 'multimedia/images/materiales/27.jpg', 'multimedia/images/materiales/25.jpg'];
    let imgMarRosa = ['multimedia/images/materiales/marmol/11.png', 'multimedia/images/materiales/23.jpg', 'multimedia/images/materiales/26.jpg'];
    let imgMarRayado2 = ['multimedia/images/materiales/marmol/6.png', 'multimedia/images/materiales/21.jpg', 'multimedia/images/materiales/20.jpg'];

    // Tarjetas lambrin    
    createCard('multimedia/images/materiales/lambrin/14.png', 'Lambrin color negro', '$300 pz', 'tag1', 'card-lambrin', medidaLambrin, descripcionLambrin, imgLamNeg, 'disponible');
    createCard('multimedia/images/materiales/lambrin/17.png', 'Lambrin color madera', '$300 pz', 'tag1', 'card-lambrin', medidaLambrin, descripcionLambrin, imgLamMad, 'disponible');
    createCard('multimedia/images/materiales/21.jpg', 'Lambrin color carbon', '$300 pz', 'tag1', 'card-lambrin', medidaLambrin, descripcionLambrin, imgLamMad, 'proximamente');
    // Tarjetas marmol
    createCard('multimedia/images/materiales/marmol/3.png', 'Mármol PVC color negro', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarNegro, 'disponible');
    createCard('multimedia/images/materiales/marmol/2.png', 'Mármol PVC color blanco', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarBlanco, 'disponible');
    createCard('multimedia/images/materiales/marmol/7.png', 'Mármol PVC color blanco y negro', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarBlancoYNegro, 'disponible');
    createCard('multimedia/images/materiales/marmol/10.png', 'Mármol PVC color rayado', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarRayado, 'disponible');
    createCard('multimedia/images/materiales/marmol/5.png', 'Mármol PVC rayado', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarRayado2, 'disponible');
    createCard('multimedia/images/materiales/marmol/12.png', 'Mármol PVC color rosa', '$1300 pz', 'tag1', 'card-marmol', medidaMarmol, descripcionMarmol, imgMarRosa, 'disponible');
    // Tarjetas mas materiales
    createCard('multimedia/images/materiales/marmol/9.png', 'Material 1', '$900 pz', 'tag1', 'card-otros-materiales', medidaLambrin, descripcionLambrin, imgLamMad, 'disponible');
    createCard('multimedia/images/materiales/23.jpg', 'Material 2', '$500 pz', 'tag1', 'card-otros-materiales', medidaMarmol, descripcionMarmol, imgMarNegro, 'disponible');
    createCard('multimedia/images/materiales/27.jpg', 'Material 3', '$500 pz', 'tag1', 'card-otros-materiales', medidaLambrin, descripcionLambrin, imgLamNeg, 'agotado');
    createCard('multimedia/images/materiales/marmol/6.png', 'Material 4', '$600 pz', 'tag1', 'card-otros-materiales', medidaMarmol, descripcionLambrin, imgMarNegro, 'agotado');
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


