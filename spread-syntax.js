const pikachu = {name: 'Pikachu'};
const stats = {hp: 40, attack: 60, defense: 45};



const lvl0 = {...pikachu, ...stats};
const lvl1 = {...pikachu, hp: 45};



let pokemon = ['Arbok', 'Meowth', 'Sandshrew'];
// Push
pokemon = [...pokemon, 'Pikachu', 'Weedle', 'Metapod'];
//unshift
pokemon = ['Bulbasaur', 'Squirtle', 'Charmander', ...pokemon,];