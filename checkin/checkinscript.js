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
