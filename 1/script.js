function cleaned(string) {
    let str;

    switch(typeof string) {
        case 'number': 
            str = string.toString();
            break;
        case 'object': 
            str = JSON.stringify(string);
            break;
        case 'string':
            str = string;
            break;
        case 'boolean': 
            str = null;
            break;
    }

    if(str === null || str === undefined) return null;

    let cleanedStr = str.toLowerCase().replace(/[\s,.:;{}?!"'$]/g, '');

    return cleanedStr;
}


function palindrome(str) {
    let string = cleaned(str);

    return string.split('').reverse().join('') === string;
   
}


function palindromeFor(str) {
    let string = cleaned(str);

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
}



console.log(palindrome('аргентина манит негра'))
console.log(palindromeFor('аргентина манит негра'))
console.log(palindromeFor('аргентина манит латиноса'))