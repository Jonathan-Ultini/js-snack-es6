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
