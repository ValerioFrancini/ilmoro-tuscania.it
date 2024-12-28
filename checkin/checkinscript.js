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
  