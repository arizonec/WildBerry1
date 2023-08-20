const objects = [
    {
        name: 'John',
        age: 27,
    },
    {
        name: 'Alex',
        age: 23,
    },
    {
        name: 'Thomas',
        age: 22,
    },
    {
        name: 'Stan',
        age: 25,
    },
    {
        name: 'Jeremy',
        age: 24,
    },
    {
        name: 'Emily',
        age: 26,
    },
    {
        name: 'Alexa',
        age: 25,
    },
    {
        name: 'Michael',
        age: 21,
    },
    {
        name: 'Peter',
        age: 19,
    },
    {
        name: 'Stef',
        age: 25,
    },

]

function sort(array) {
    let sorted = array.sort((a, b) => {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
    });

    return sorted;
}

console.log(sort(objects))