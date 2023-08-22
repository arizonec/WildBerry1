export const dependOnNum = (n, titles) => {
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
  }


export const data = (word) => {
    let wordsArray = [];
    let changedWord;
    let thirdWord;
    let symbol = word[word.length - 1];

    if(typeof word !== 'string') return 'Введите слово';

    wordsArray.push(word);

    switch(word[word.length - 1] === symbol) {
        case symbol === 'а': 
            changedWord = word.substring(0, word.length -1 ) + 'ы';
            wordsArray.push(changedWord);
            thirdWord = word.substring(0, word.length -1 ) + '';
            wordsArray.push(thirdWord);
            break;
        case symbol === 'б': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'в': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'г': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'д': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'е': 
            changedWord = word.substring(0, word.length -1 ) + 'я';
            wordsArray.push(thirdWord);
            thirdWord = word.substring(0, word.length -1 ) + 'й';
            wordsArray.push(thirdWord);
            break;
        case symbol === 'ж': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ей';
            wordsArray.push(changedWord);
            break;
        case symbol === 'з': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'и': 
            if (word[word.length - 2] === 'л') {
                changedWord = word.substring(0, word.length -1 ) + 'ей';
                wordsArray.push(changedWord);
                wordsArray.push(changedWord);
                break;
            }
            wordsArray.push(word);
            wordsArray.push(word);
            break;
        case symbol === 'к': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'л': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'м': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'н': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'о': 
            if (word[word.length - 2] === 'к') {
                changedWord = word.substring(0, word.length -1 ) + 'а';
                wordsArray.push(thirdWord);
                thirdWord = word.substring(0, word.length -1 ) + '';
                wordsArray.push(thirdWord);
                break;
            }
            wordsArray.push(word);
            wordsArray.push(word);
            break;
        case symbol === 'п': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'р': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'с': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'т': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'у': 
            wordsArray.push(word);
            wordsArray.push(word);
            break;
        case symbol === 'ф': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'х': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'ц': 
        if (word[word.length - 2] === 'е') {
                changedWord = word.substring(0, word.length -1 ) + 'а';
                wordsArray.push(thirdWord);
                thirdWord = word.substring(0, word.length - 2  ) + 'цов';
                wordsArray.push(thirdWord);
            break;
            }
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ов';
            wordsArray.push(changedWord);
            break;
        case symbol === 'ч': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ей';
            wordsArray.push(changedWord);
            break;
        case symbol === 'ш': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ей';
            wordsArray.push(changedWord);
            break;
        case symbol === 'щ': 
            changedWord = word + 'а';
            wordsArray.push(changedWord);
            changedWord = word + 'ей';
            wordsArray.push(changedWord);
            break;
        case symbol === 'ы': 
            changedWord = word.substring(0, word.length -1 ) + 'ов';
            wordsArray.push(thirdWord);
            thirdWord = word.substring(0, word.length -1 ) + '';
            wordsArray.push(thirdWord);
            break;
        case symbol === 'ь': 
            changedWord = word.substring(0, word.length -1 ) + 'и';
            wordsArray.push(thirdWord);
            thirdWord = word.substring(0, word.length -1 ) + 'ей';
            wordsArray.push(thirdWord);
            break;
        case symbol === 'э': 
            wordsArray.push(word);
            wordsArray.push(word);
            break;
        case symbol === 'ю': 
            wordsArray.push(word);
            wordsArray.push(word);
            break;
        case symbol === 'я': 
            changedWord = word.substring(0, word.length -1 ) + 'и';
            wordsArray.push(thirdWord);
            thirdWord = word.substring(0, word.length -1 ) + 'й';
            wordsArray.push(thirdWord);
            break;
    }
    return wordsArray;
    
}


