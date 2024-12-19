// Codice per l'animazione del logo durante il caricamento della pagina
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo-image');
    const title = document.querySelector('.site-title');
    if (logo) {
        logo.classList.add('loaded'); // Aggiunge la classe 'loaded' al logo per attivare l'animazione
    }
    if (title) {
        title.classList.add('loaded'); // Aggiunge la classe 'loaded' al titolo per attivare l'animazione
    }
});

// Funzione per il preloading delle immagini
function preloadImages() {
    const imageUrls = [
        'img/img_10.JPG',
        'img/img_2.JPG',
        'img/img_3.JPG',
        'img/img_4.JPG',
        'img/img_5.JPG',
        'img/img_6.JPG',
        'img/img_7.JPG',
        'img/img_8.JPG',
        'img/img_9.JPG'
    ];

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

// Codice per lo slider con transizione di scorrimento e puntini di navigazione
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
const sliderElement = document.querySelector('.slider'); // Usato per la transizione dello slider

// Funzione per aggiornare lo stato attivo dei puntini
function updateDots() {
    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
}

// Funzione per muovere lo slider manualmente con le frecce
function moveSlide(direction) {
    if (slides.length > 0) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length; // Calcola l'indice della prossima immagine
        sliderElement.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots(); // Aggiorna lo stato dei puntini
    }
}

// Funzione per passare a uno specifico slide cliccando sul puntino
function currentSlide(index) {
    currentIndex = index;
    sliderElement.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots(); // Aggiorna lo stato dei puntini
}

// Funzione per far avanzare automaticamente lo slider
function autoSlide() {
    moveSlide(1); // Passa all'immagine successiva
}

// Inizializza l'effetto di transizione automatica ogni 4 secondi
if (slides.length > 0) {
    setInterval(autoSlide, 4000);
    updateDots(); // Inizializza il primo slide come attivo
}

// Funzione per cambiare la lingua del sito
function changeLanguage(language) {
    if (language === 'it') {
        window.location.href = 'index.html'; // Cambia alla versione italiana del sito
    } else if (language === 'en') {
        window.location.href = 'index-en.html'; // Cambia alla versione inglese del sito
    }
}

// JavaScript per il menu burger
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open'); // Anima il menu burger
    navMenu.classList.toggle('visible'); // Mostra/nasconde il menu
});

// Variabili per gestire il touch sullo slider immagini da mobile
let startX = 0;
let endX = 0;

// Aggiungi eventi di tocco per supportare lo scorrimento su dispositivi mobili
const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Registra la posizione iniziale del tocco
});

sliderContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Aggiorna la posizione finale del tocco durante lo spostamento
});

sliderContainer.addEventListener('touchend', () => {
    const threshold = 50; // Aggiungi una soglia per evitare cambiamenti accidentali
    if (startX > endX + threshold) {
        moveSlide(1); // Scorri verso destra se il tocco è stato uno swipe verso sinistra
    } else if (startX < endX - threshold) {
        moveSlide(-1); // Scorri verso sinistra se il tocco è stato uno swipe verso destra
    }
});

window.addEventListener('load', () => {
    const airbnbButton = document.querySelector('.airbnb-button');
    if (airbnbButton) {
        airbnbButton.classList.add('loaded'); // Aggiunge la classe 'loaded' per attivare il fade-in
    }
});

window.addEventListener('scroll', function() {
    if (localStorage.getItem('promoClosed')) {
        return;
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        promoCard.style.display = 'block'; // Mostra la card
    }
});




// Variabili per tracciare lo stato dello scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

// Funzione per mostrare/nascondere l'header in base allo scroll
function handleScroll() {
    const currentScrollY = window.scrollY; // Posizione attuale dello scroll

    // Evita cambiamenti allo stato dell'header se sei completamente in cima alla pagina
    if (currentScrollY <= 0) {
        header.classList.remove('hidden');
        header.classList.add('visible');
        return;
    }

    // Logica per nascondere/mostrare l'header in base alla direzione dello scroll
    if (currentScrollY > lastScrollY) {
        // Scorrimento verso il basso: nascondi l'header
        header.classList.remove('visible');
        header.classList.add('hidden');
    } else {
        // Scorrimento verso l'alto: mostra l'header
        header.classList.remove('hidden');
        header.classList.add('visible');
    }

    // Aggiorna l'ultimo valore dello scroll
    lastScrollY = currentScrollY;
}


// Aggiungi un listener per l'evento scroll
window.addEventListener('scroll', handleScroll);

// Inizializza l'header come visibile
header.classList.add('visible');


//navigation-card FADEIN
document.addEventListener("DOMContentLoaded", function () {
    const navigationCard = document.querySelector(".navigation-card");
    if (navigationCard) {
        navigationCard.classList.add("fade-in"); // Aggiunge la classe per il fade-in
        setTimeout(() => {
            navigationCard.classList.add("visible"); // Aggiunge lo stato visibile
        }, 500); // Delay di 500ms prima che il menu appaia
    }
});

//navigation-card scompare per non coprire il footer
document.addEventListener("DOMContentLoaded", () => {
    const navigationCard = document.querySelector(".navigation-card");
    const footer = document.querySelector(".footer"); // Selettore del footer

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Se il footer è visibile, nascondi la navigation-card
        if (footerTop <= windowHeight) {
            navigationCard.classList.add("hidden");
        } 
        // Se stiamo risalendo, mostra la navigation-card
        else if (window.scrollY < lastScrollY) {
            navigationCard.classList.remove("hidden");
        }

        lastScrollY = window.scrollY;
    });
});






//loader
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
  
    // Funzione per mostrare il preloader
    function showPreloader() {
      preloader.classList.add("visible");
    }
  
    // Funzione per nascondere il preloader
    function hidePreloader() {
      preloader.classList.remove("visible");
    }
  
    // Controlla la velocità della connessione
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection =
      connection &&
      (connection.effectiveType === "2g" || connection.effectiveType === "slow-2g");
  
    let timeout;
  
    // Se la connessione è lenta, mostra subito il preloader
    if (isSlowConnection) {
      showPreloader();
    } else {
      // Altrimenti, usa un timeout per mostrare il preloader solo se il caricamento impiega troppo tempo
      timeout = setTimeout(showPreloader, 3000); // 3 secondi
    }
  
    // Nascondi il preloader una volta che la pagina è completamente caricata
    window.addEventListener("load", function () {
      clearTimeout(timeout); // Cancella il timeout
      hidePreloader(); // Nascondi il preloader
    });
  });
  