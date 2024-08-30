//#: SNACK 1: Placeholders Tavolo Vip
const tableName = "Tavolo Vip";
const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'George Clooney',
  'Amal Clooney',
  'Fedez',
  'Amadeus',
  'Fiorello'
];

// Trasformo ogni elemento array in oggetto
const placeholders = guests.map((guest, index) => ({ tableName: tableName, guestName: guest, place: index + 1 }));


// Stampa in console
console.log(placeholders);

// Mostra in pagina
const placeholdersList = document.getElementById('placeholders-list');
placeholders.forEach(placeholder => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `Nome: <b>${placeholder.guestName}</b>, Posto: <b>${placeholder.place}</b>, Tavolo: <b>${placeholder.tableName}</b>`;
  placeholdersList.appendChild(listItem);
});

//#: SNACK 2: Lista studenti
const students = [
  { Id: 213, Name: 'Marco della Rovere', Grades: 78 },
  { Id: 110, Name: 'Paola Cortellessa', Grades: 96 },
  { Id: 250, Name: 'Andrea Mantegna', Grades: 48 },
  { Id: 145, Name: 'Gaia Borromini', Grades: 74 },
  { Id: 196, Name: 'Luigi Grimaldello', Grades: 68 },
  { Id: 102, Name: 'Piero della Francesca', Grades: 50 },
  { Id: 120, Name: 'Francesca da Polenta', Grades: 84 }
];

// 1. Creare una lista con il nome degli studenti tutto in maiuscolo
const upperCaseNames = students.map(student => student.Name.toUpperCase());
console.log('Nomi in maiuscolo:', upperCaseNames);

// Mostra in pagina
const uppercaseNamesList = document.getElementById('uppercase-names-list');
upperCaseNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.innerHTML = name;
  uppercaseNamesList.appendChild(listItem);
});

// 2. Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const highGradesStudents = students.filter(student => student.Grades > 70);
console.log('Studenti con voti superiori a 70:', highGradesStudents);

// Mostra in pagina
const highGradesList = document.getElementById('high-grades-list');
highGradesStudents.forEach(student => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `Nome: <b>${student.Name}</b>, Voti: <b>${student.Grades}</b>`;
  highGradesList.appendChild(listItem);
});

// 3. Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const highGradesAndIdStudents = highGradesStudents.filter(student => student.Id > 120);
console.log('Studenti con voti superiori a 70 e ID superiore a 120:', highGradesAndIdStudents);

// Mostra in pagina
const highGradesAndIdList = document.getElementById('high-grades-and-id-list');
highGradesAndIdStudents.forEach(student => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `Nome: <b>${student.Name}</b>, Voti: <b>${student.Grades}</b>, ID: <b>${student.Id}</b>`;
  highGradesAndIdList.appendChild(listItem);
});

//#:Snack 3: Array di biciclette
const bikes = [
  { nome: 'Argon 18', peso: 8.2 },
  { nome: 'Gazelle', peso: 6.8 },
  { nome: 'Bergamont', peso: 8.5 },
  { nome: 'Look', peso: 7.1 },
];

// Trova la bici con il peso minore
const [lightestBike] = bikes.sort((a, b) => a.peso - b.peso);

// Destrutturazione e stampa in console
const { nome, peso } = lightestBike;
console.log(`La bici più leggera è la ${nome} con un peso di ${peso} kg.`);

// Stampa in pagina
const lightBikes = document.getElementById('light-bikes');
const listBike = document.createElement('li');
listBike.innerHTML = `La bici più leggera è la: <b>${nome}</b>, con un peso di <b>${peso}</b> kg.`;

// Aggiunge l'elemento creato alla lista
lightBikes.appendChild(listBike);


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