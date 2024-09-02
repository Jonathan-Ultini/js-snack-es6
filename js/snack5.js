const nomi = ['piPpo', 'PLUTO', 'PapErino'];

const nomiFormattati = nomi.map(nome =>
  nome[0].toUpperCase() + nome.slice(1).toLowerCase()
);


console.log(nomiFormattati); // Output: ['Pippo', 'Pluto', 'Paperino']


const ulElement = document.getElementById('name-list');

nomiFormattati.forEach(nome => {
  const liElement = document.createElement('li');
  liElement.textContent = nome;
  ulElement.appendChild(liElement);
});