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
  






  function goToStep(step) {
    console.log(`Navigating from step ${currentStep} to step ${step}`);
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    const nextStepElement = document.getElementById(`step-${step}`);

    if (!currentStepElement) {
        console.error(`Current step element (#step-${currentStep}) not found.`);
        return;
    }

    if (!nextStepElement) {
        console.error(`Next step element (#step-${step}) not found.`);
        return;
    }

    // Nascondi lo step corrente
    currentStepElement.classList.add('hidden');
    console.log(`Step ${currentStep} hidden.`);

    // Mostra il nuovo step
    nextStepElement.classList.remove('hidden');
    console.log(`Step ${step} shown.`);

    // Aggiorna la barra di progresso
    const progressElements = document.querySelectorAll('.progress');
    progressElements.forEach((progress, index) => {
        if (index < step) {
            progress.classList.add('current');
        } else {
            progress.classList.remove('current');
        }
    });

    currentStep = step;
}
