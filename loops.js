const orders = [500, 30, 99, 15, 233];

// Reduce
const total = orders.reduce((acc, cur) => acc + cur);

// Map
const WithTax = orders.map(v => v * 1.1);

// Filter
const highValue = orders.filter(v => v > 100);

