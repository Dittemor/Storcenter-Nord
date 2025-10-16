// Fiske spil JavaScript funktioner

// Funktion til at vise fisk information
function showFishInfo(fishId) {
   // Find infoboksen for den valgte fisk
   const infoBox = document.getElementById(fishId + '-info');

   if (infoBox) {
       // Fjern 'hidden' klasse for at vise boksen
       infoBox.classList.remove('hidden');

       // Tilføj en fade-in effekt
       infoBox.style.opacity = '0';
       infoBox.style.display = 'flex';

       // Animér indtil fuld synlighed
       setTimeout(() => {
           infoBox.style.opacity = '1';
       }, 10);

       // Tilføj lyd effekt (hvis ønsket)
       playFishCaughtSound();
   }
}

// Funktion til at lukke fisk information
function closeFishInfo(fishId) {
   // Find infoboksen for den valgte fisk
   const infoBox = document.getElementById(fishId + '-info');

   if (infoBox) {
       // Tilføj fade-out effekt
       infoBox.style.opacity = '0';

       // Skjul boksen efter animationen
       setTimeout(() => {
           infoBox.classList.add('hidden');
           infoBox.style.display = 'none';
       }, 300);

       // Tilføj lyd effekt for frigivelse (hvis ønsket)
       playFishReleasedSound();
   }
}

// Funktion til at spille lyd når en fisk fanges (valgfrit)
function playFishCaughtSound() {
   // Du kan tilføje en lyd her hvis ønsket
   // const audio = new Audio('sounds/fish-caught.mp3');
   // audio.play().catch(e => console.log('Audio play failed:', e));
}

// Funktion til at spille lyd når en fisk frigives (valgfrit)
function playFishReleasedSound() {
   // Du kan tilføje en lyd her hvis ønsket
   // const audio = new Audio('sounds/fish-released.mp3');
   // audio.play().catch(e => console.log('Audio play failed:', e));
}

// Ekstra funktionalitet: Luk infoboks ved klik udenfor
document.addEventListener('click', function(event) {
   // Tjek om klikket er på en infoboks
   const infoBoxes = document.querySelectorAll('.info-box');

   infoBoxes.forEach(box => {
       if (!box.classList.contains('hidden')) {
           const content = box.querySelector('.info-content');

           // Hvis klikket er udenfor indholdet, luk boksen
           if (!content.contains(event.target) && !event.target.closest('.swimming-fish')) {
               const fishId = box.id.replace('-info', '');
               closeFishInfo(fishId);
           }
       }
   });
});

// Tilføj keyboard support (ESC tast lukker åbne infobokse)
document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
       const openInfoBoxes = document.querySelectorAll('.info-box:not(.hidden)');
       openInfoBoxes.forEach(box => {
           const fishId = box.id.replace('-info', '');
           closeFishInfo(fishId);
       });
   }
});

// Tilføj hover effekt til fisk (valgfrit)
document.addEventListener('DOMContentLoaded', function() {
   const fishElements = document.querySelectorAll('.swimming-fish');

   fishElements.forEach(fish => {
       fish.addEventListener('mouseenter', function() {
           this.style.transform = 'scale(1.1)';
           this.style.transition = 'transform 0.2s ease';
       });

       fish.addEventListener('mouseleave', function() {
           this.style.transform = 'scale(1)';
       });
   });
});

console.log('Fiske spil JavaScript loaded successfully! 🐟');

