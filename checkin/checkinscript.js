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
  






  let currentStep = 1;

  function goToStep(step) {
      // Nasconde lo step corrente
      document.getElementById(`step-${currentStep}`).style.display = 'none';
  
      // Mostra il nuovo step
      document.getElementById(`step-${step}`).style.display = 'block';
  
      // Aggiorna lo step corrente
      currentStep = step;
  
      // Aggiorna la barra di progresso
      const progressElements = document.querySelectorAll('.progress');
      progressElements.forEach((progress, index) => {
          if (index < step) {
              progress.classList.add('current');
          } else {
              progress.classList.remove('current');
          }
      });
  }
  




  