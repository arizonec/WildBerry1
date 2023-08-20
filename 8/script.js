const arrayOfFunctions = [
    function first(number) {
        return number + 1 ;
    },
    function second(number) {
        return number + 11;
    },
    function third(number) {
        return number + 111;
    },
];


const outside = (array) => {
    const newArray = [];
    let i = 0;

    return function inside() {
        for(; i < array.length; i++) {
            newArray.push(array[i](i));
        }
        return newArray;
    }
}

let fun = outside(arrayOfFunctions);
console.log(fun());