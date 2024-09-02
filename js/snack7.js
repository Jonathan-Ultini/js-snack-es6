/*SNACK 7: Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con 
il nome e cognome e l'indicazione se può guidare, in base all'età. */

const persone = [
  { name: 'Marco', surname: 'Lancellotti', age: 69 },
  { name: 'Anna', surname: 'De Meriti', age: 20 },
  { name: 'Giovanni', surname: 'Soccio', age: 85 },
  { name: 'Francesco', surname: 'Cappellato', age: 14 }
];

const frasi = persone.map(persona => {
  const canDrive = persona.age >= 18 && persona.age <= 80 ? `può guidare perchè ha: ${persona.age} ` : `non può guidare perchè ha: ${persona.age}`;
  return `${persona.name} ${persona.surname} ${canDrive}.`;
});


const ulElement2 = document.getElementById('drive');

frasi.forEach(frase => {
  const liElement = document.createElement('li');
  liElement.innerHTML = frase;
  ulElement2.appendChild(liElement);
});