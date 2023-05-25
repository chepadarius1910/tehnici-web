// Obținem referințe către elementele DOM relevante
const userGreeting = document.getElementById('user-greeting');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

// Verificăm dacă există un nume de utilizator salvat în localStorage și îl afișăm
const savedName = localStorage.getItem('username');
if (savedName) {
  userGreeting.textContent = `Bun venit, ${savedName}!`;
}

// Adăugăm un eveniment pentru formularul de introducere a numelui
nameForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenim comportamentul implicit de submit al formularului

  const enteredName = nameInput.value;

  if (enteredName) {
    userGreeting.textContent = `Bun venit, ${enteredName}!`;

    // Salvăm numele utilizatorului în localStorage
    localStorage.setItem('username', enteredName);
  } else {
    userGreeting.textContent = 'Introduceți un nume valid.';
  }

  // Resetăm inputul formularului
  nameInput.value = '';
});
// Array-ul cu echipele disponibile pentru tombolă
const echipeChampionsLeague = [
  "Real Madrid",
  "FC Barcelona",
  "Manchester United",
  "Bayern Munich",
  "Manchester City",
  "Paris Saint Germain",
  "Borussia Dortmund",
  "Chelsea"
];

// Funcția pentru extragerea unei echipe câștigătoare
function extrageEchipaCastigatoare() {
  // Generăm un index aleatoriu pentru a extrage o echipă din array
  const indexCastigator = Math.floor(Math.random() * echipeChampionsLeague.length);
  
  // Returnăm echipa câștigătoare
  return echipeChampionsLeague[indexCastigator];
}

// Extragerea și afișarea echipei câștigătoare
const echipaCastigatoare = extrageEchipaCastigatoare();
console.log("Echipa câștigătoare a Champions League este: " + echipaCastigatoare);
