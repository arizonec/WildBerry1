const bookFirst = {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    year: '1952',
};

const getTitle = (obj) => {
    const name = obj.title;
    console.log(`That book was named, ${name}!`);
}

const changeYear = () => {
    bookFirst.year = '1111';
    console.log(bookFirst);
}

changeYear();

//------------------------------------
const bookSecond = {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    year: '1952',

   getName: function() {
        const name = obj.title;
        console.log(`That book was named, ${name}!`)
   },

   changeYear: function() {
    bookSecond.year = '1111';
        console.log(bookSecond);
   }
};

bookSecond.changeYear();

//------------------------------------
const bookThird = {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    year: '1952',
};

const spreadedOBj = {...bookThird};

const getSpreadedTitle = () => {
    const name = spreadedOBj.title;
    console.log(`That book was named, ${name}!`);
}

const changeSpreadedYear = () => {
    spreadedOBj.year = '1111';
    console.log(spreadedOBj);
}

getSpreadedTitle();
changeSpreadedYear();