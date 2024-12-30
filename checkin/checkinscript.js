// CHECK-IN

  // Elementi DOM
  const infoButton = document.getElementById('infoButton');
  const infoOverlay = document.getElementById('infoOverlay');
  const closeOverlay = document.getElementById('closeOverlay');
  
  // Mostra l'overlay
  infoButton.addEventListener('click', () => {
      infoOverlay.style.display = 'flex';
  });
  
  // Chiudi l'overlay
  closeOverlay.addEventListener('click', () => {
      infoOverlay.style.display = 'none';
  });
  
  // Eventi per ogni link nell'overlay
  document.getElementById('whyCheckin').addEventListener('click', () => {
      alert('Sito in manutenzione');
  });
  
  document.getElementById('faq').addEventListener('click', () => {
      alert('Sito in manutenzione');
  });
  
  document.getElementById('privacyPolicy').addEventListener('click', () => {
      alert('Sito in manutenzione');
  });
  
  console.log(infoOverlay.style);





  let currentStep = 1; // Variabile per tenere traccia dello step corrente
const totalSteps = 5; // Numero totale di step

document.addEventListener('DOMContentLoaded', () => {
    // Funzione per navigare tra gli step
    window.goToStep = function (step) {
     
       
    

        // Elementi degli step
        const currentStepElement = document.getElementById(`step-${currentStep}`);
        const nextStepElement = document.getElementById(`step-${step}`);

        // Controlla se gli elementi esistono
        if (!currentStepElement || !nextStepElement) {
            console.error(`Step element not found: step-${currentStep} or step-${step}`);
            return;
        }

        // Nascondi lo step corrente e mostra il nuovo step
        console.log(`Hiding step-${currentStep}`);
        currentStepElement.classList.add('hidden');
        console.log(`Showing step-${step}`);
        nextStepElement.classList.remove('hidden');

        // Aggiorna la barra di progresso
        updateProgressBar(step);

        // Aggiorna lo step corrente
        currentStep = step;
    };

    // Funzione per aggiornare la barra di progresso
    function updateProgressBar(step) {
        const progressElements = document.querySelectorAll('.progress');
        progressElements.forEach((progress, index) => {
        });
    }
    
    

    // Eventuale inizializzazione (puoi richiamarla per configurare la barra iniziale)
    updateProgressBar(currentStep);
});






//gestisce la chiusura del form per il checkin controllando se sono stati inseriti dei dati

let formModified = false; // Variabile per tracciare se i dati sono stati modificati

document.addEventListener('DOMContentLoaded', () => {
    // Rileva modifiche nei form
    const inputs = document.querySelectorAll('input'); // Selettore per tutti i campi input
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            formModified = true; // Imposta la variabile a true quando l'utente modifica qualcosa
        });
    });

    // Aggiungi eventi al modale
    const confirmModal = document.getElementById('confirmModal');
    const cancelButton = document.querySelector('.confirm-cancel');
    const confirmButton = document.querySelector('.confirm-confirm');

    // Funzione per chiudere il modale
    const closeModal = () => {
        confirmModal.classList.add('hidden');
    };

    // Annulla chiusura pagina
    cancelButton.addEventListener('click', closeModal);

    // Conferma chiusura pagina
    confirmButton.addEventListener('click', () => {
        window.location.href = '/index.html';
    });

    // Funzione per gestire la chiusura della pagina
    window.confirmClosePage = function () {
        if (formModified) {
            // Mostra il modale
            confirmModal.classList.remove('hidden');
        } else {
            // Nessun dato modificato, chiudi direttamente
            window.location.href = '/index.html';
        }
    };
});
