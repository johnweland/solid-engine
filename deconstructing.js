const turtle = {
    name: 'Leonardo',
    legs: 4,
    halfshell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'pizza'
}

// Decronstructing Method One
const feed = ({name, meal, diet}) => {
    return `Feed ${name} ${meal} slices of ${diet}`;
}
// Decronstructing Method Two
const feed2 = (animal) => {
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} slices of ${diet}`;
}