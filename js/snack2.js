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
