//#: Snack 4: squadre di calcio
// Funzione per generare numeri random tra due valori
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Array di squadre
const teams = [
  { nome: 'Juventus', punti: 0, falliSubiti: 0 },
  { nome: 'Foggia', punti: 0, falliSubiti: 0 },
  { nome: 'Napoli', punti: 0, falliSubiti: 0 },
  { nome: 'Inter', punti: 0, falliSubiti: 0 }
];

// Assegna valori random per punti fatti e falli subiti
teams.forEach(team => {
  team.punti = getRandomNumber(0, 100);
  team.falliSubiti = getRandomNumber(20, 50);
});

// Crea un nuovo array con solo nomi e falli subiti
const teamFouls = teams.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// Ordina le squadre per falli subiti in ordine decrescente (dal maggiore al minore)
teams.sort((a, b) => b.falliSubiti - a.falliSubiti);

// Stampa in console
console.log('Squadre e falli subiti:', teamFouls);

// Stampa in pagina
const foulTeam = document.getElementById('foul-teams');
teams.forEach(team => {
  const listTeam = document.createElement('li');
  listTeam.innerHTML = `Nome squdra: <b>${team.nome}</b>, Falli subiti: <b>${team.falliSubiti}</b>`;
  foulTeam.appendChild(listTeam);
});