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


//SNACK 2
//lista studenti
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

// 2. Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const highGradesStudents = students.filter(student => student.Grades > 70);

console.log('Studenti con voti superiori a 70:', highGradesStudents);

// 3. Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const highGradesAndIdStudents = students.filter(student => student.Grades > 70 && student.Id > 120);

console.log('Studenti con voti superiori a 70 e ID superiore a 120:', highGradesAndIdStudents);
