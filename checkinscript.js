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
      alert('Inserire il testo per "Perché devo fare il check-in?" qui.');
  });
  
  document.getElementById('faq').addEventListener('click', () => {
      alert('Inserire il testo per "FAQ" qui.');
  });
  
  document.getElementById('privacyPolicy').addEventListener('click', () => {
      alert('Inserire il testo per "Privacy Policy" qui.');
  });
  