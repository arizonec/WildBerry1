const array = [
    function first(number) {
        console.log(number);
    },
    function first(number) {
        console.log(number);
    },
    function first(number) {
        console.log(number);
    },
    function first(number) {
        console.log(number);
    },
];

async function render() {
    for(let i = 0; i < array.length; i++) {
        await new Promise( ( resolve, reject ) => {
            setTimeout( ()=> {
                resolve(array[i](`${i} - функция!`))
                reject('Что то пошло не так:(')
            }, 1000 );
        } )
    }
}

function renderFor() {
    for(let i = 0; i < array.length; i++) {
        array[i](`${i} - функция!`);
    } 
}



render();
// renderFor();



