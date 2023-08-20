const data = {
    name: 'Kirill',
    city: 'Moscow',
    parameters: ['123', '456', 789], 
    age: 23,
    married: false,
}

//Для решения этой задачи, необходимо было понять, какие типы данных требуется обработотать и под каждый тип написать условие или цикл, в случае с объектом и массивом.
//С number, boolean и string все понятно, просто либо оборачиваю в двойные кавычки, либо оставляем как есть
//Массивы и объекты нужно прогнать через циклы, а для того что бы найти их вложенность, задействую рекурсию. 
//Далее убираю последнюю запетую и закрываю нужным символом скобки. 

const stringify = (obj) => {
    if(typeof obj === 'string') {
        return `"${obj}"`;
    }

    if(typeof obj === 'number' || typeof obj === 'boolean') {
        return `${obj}`;
    }

    if(Array.isArray(obj)) {
        let res = "[";
        for(let i = 0; i < obj.length; i++) {
            res += `${stringify(obj[i])},`;
        }
        res = `${res.substring(0, res.length - 1)}]`;
        return res;
    }

    let res = "{";
    for(let key in obj) {
        res += `"${key}":${stringify(obj[key])},`;
    }
    res = `${res.substring(0, res.length - 1)}}`;
    return res;
}

let stringed = stringify(data);


//Далее при помощи встроенного метода, парсю строку обратно в JSON что бы проверить, что все работает)

console.log(JSON.parse(stringed))
// console.log(JSON.parse(stringed));
