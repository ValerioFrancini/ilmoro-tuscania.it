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

document.addEventListener('DOMContentLoaded', () => {
    // Funzione per navigare tra gli step
    window.goToStep = function (step) {
        console.log(`Attempting to navigate to step ${step}`);

        // Elementi degli step
        const currentStepElement = document.getElementById(`step-${currentStep}`);
        const nextStepElement = document.getElementById(`step-${step}`);

        // Controlla se gli elementi esistono
        if (!currentStepElement || !nextStepElement) {
            console.error(`Step element not found: step-${currentStep} or step-${step}`);
            return;
        }

        // Nascondi lo step corrente e mostra il nuovo step
        currentStepElement.classList.add('hidden');
        nextStepElement.classList.remove('hidden');

        // Aggiorna la barra di progresso
        const progressElements = document.querySelectorAll('.progress');
        progressElements.forEach((progress, index) => {
            if (index < step) {
                progress.classList.add('current');
            } else {
                progress.classList.remove('current');
            }
        });

        // Aggiorna lo step corrente
        currentStep = step;
    };
});