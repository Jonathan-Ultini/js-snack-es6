
//snack 6: Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
//Crea un nuovo array con la lista dei mammiferi.
const animals = [
  { name: 'leone', family: 'felidi', class: 'mammiferi' },
  { name: 'cane', family: 'canidi', class: 'mammiferi' },
  { name: 'gallina', family: 'fasianidi', class: 'uccelli' },
  { name: 'gatto', family: 'felidi', class: 'mammiferi' },
  { name: 'pantera', family: 'felidi', class: 'mammiferi' },
  { name: 'piccione', family: 'fasianidi', class: 'uccelli' }
];

const mammiferi = animals.filter(animal => animal.class === 'mammiferi');

const ulElement = document.getElementById('animal');

mammiferi.forEach(animal => {
  const liElement = document.createElement('li');
  liElement.textContent = `${animal.name} (Famiglia: ${animal.family}, Classe: ${animal.class})`;
  ulElement.appendChild(liElement);
});
