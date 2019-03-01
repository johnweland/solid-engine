// Computed Property Names
const p1 = {name: 'tom', age: 30, sex: 'male'};
const p2 = {name: 'dick', age: 40, sex: 'male'};
const p3 = {name: 'mary', age: 19, sex: 'female'};
console.log('%c People', 'color: orange; font-weight: bold;');
console.log({p1, p2, p3});

// Tabled Date
console.log('%c Tabular', 'color: orange; font-weight: bold;');
console.table([p1, p2, p3]);

// Stack Traceing
const aFunction = () => console.trace();
