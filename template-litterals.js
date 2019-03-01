const rat = {
    name: 'Splinter',
    title: 'Master',
    skills: ['Ninjitsu', 'Teaching'],
    age: 50
}

const bio = (animal) => {
    const {title, name, skills} = animal;
    return `${title} ${name} has many skills including ${skills.join(' & ')}`;
}

const age = (str, age) => {
    const ageStr = age > 20 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = age`He is ${rat.age}`;