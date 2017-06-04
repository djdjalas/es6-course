const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, , joe, ...restOfNames] = names;

log(`${anna} ${joe}`);
log(restOfNames);
log(restOfNames.length);
