/*Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con 
il nome e cognome e l'indicazione se può guidare, in base all'età. */

const persone = [
  { name: 'Marco', surname: 'Lancellotti', age: 69 },
  { name: 'Anna', surname: 'De Meriti', age: 20 },
  { name: 'Giovanni', surname: 'Soccio', age: 25 },
  { name: 'Francesco', surname: 'Cappellato', age: 14 }
];

const frasi = persone.map(persona => {
  const canDrive = persona.age >= 18 ? 'può guidare' : 'non può guidare';
  return `${persona.name} ${persona.surname} ${canDrive}.`;
});


console.log(frasi);


const ulElement = document.getElementById('drive');

frasi.forEach(frase => {
  const liElement = document.createElement('li');
  liElement.textContent = frase;
  ulElement.appendChild(liElement);
});