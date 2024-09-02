//snack 5: A partire da un array di stringhe, crea un secondo array formattando le 
//stringhe del primo array in minuscolo e con l'iniziale maiuscola.
const nomi = ['piPpo', 'PLUTO', 'PapErino'];

const nomiFormattati = nomi.map(nome => nome[0].toUpperCase() + nome.substring(1).toLowerCase());

const nomiFormattati2 = nomi.map(nome => nome[0].toLowerCase() + nome.substring(1).toUpperCase());


console.log(nomiFormattati); // Output: ['Pippo', 'Pluto', 'Paperino']
console.log(nomiFormattati2); //Output: ['pIPPO', 'pLUTO', 'pAPERINO']

const ulElement = document.getElementById('name-list');

nomiFormattati.forEach(nome => {
  const liElement = document.createElement('li');
  liElement.innerHTML = nome;
  ulElement.appendChild(liElement);
});

nomiFormattati2.forEach(nome => {
  const liElement = document.createElement('li');
  liElement.innerHTML = nome;
  ulElement.appendChild(liElement);
});