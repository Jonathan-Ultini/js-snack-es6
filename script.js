// SNACK 1
//lista invitati
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

//trasformo ogni elemento array in oggetto
const placeholders = guests.map((guest, index) => ({
  tableName: tableName,
  guestName: guest,
  place: index + 1
}));

console.log(placeholders);