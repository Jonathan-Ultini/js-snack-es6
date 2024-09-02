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



