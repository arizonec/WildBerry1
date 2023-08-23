
const parse = (str) => {
    let i = 0; //Создаем индекс, который будет увеличиться при прозоде по каждому символу строки.

    const parseObject = () => {
        if(str[i] !== '{'){
            throw new Error('Строка не является корректным JSON объектом'); 
            //Сразу на входе необходимо проверить, является ли строка JSON объектом, если нет, то сразу прерываем работу.
        }
        i++;
        const obj = {}; //Если проверка выше дала разрешение идти дальше, то создаем объект.
    
        while (i < str.length && str[i] !== '}') { //Далее проходим по элементам строки до тех пор, пока не кончится длина или не будет закрываящая кавычка.
            const key = parseString(); //Так как у нас объект, то необходимо создать вид key:value.

            if (str[i] !== ':') {
                throw new Error('Строка не является корректным JSON объектом');
            }
    
            i++;
    
            const value = parseValue(); //В отличии от key в value может быть что угодно, поэтому требуется проверка на тип данных!
            obj[key] = value; 
    
          
            if (str[i] === ',') {
                i++;
            }
        }
        
        if (str[i] !== '}') {
            throw new Error('Строка не является корректным JSON объектом');
        }
          
        i++;
        return obj; //В случае успешно пройденых проверок, возвращается объект!
      }
    
    const parseValue = () => { //Проверяем следующий элемент после : на тип, и в зависимости от варианта вызываем нужный метод.
        if (str[i] === '{') { 
            return parseObject();
        }else if (str[i] === '[') { 
            return parseArray();
        }else if (str[i] === '"') { 
            return parseString();
        }else if (str[i] === 't' && str.substring(i, i + 4) === 'true') {
            i += 4;
            return true;
        }else if (str[i] === 'f' && str.substring(i, i + 5) === 'false') {
            i += 5;
            return false;
        }else if (str[i] === 'n' && str.substring(i, i + 4) === 'null') {
            i += 4;
            return null;
        }else { 
            const number = parseNumber();
            return number;
        } 
    }
  
    const parseArray = () => { 
        if (str[i] !== '[') {
            throw new Error('Строка не является корректным JSON массивом');
            //Сразу на входе проверяем, является ли строка массивом, если нет, то выкидывает ошибку.
        }
        i++;
        const arr = []; //Если это все таки массив, то его необходимо заполнить!
  
        while (i < str.length) { 
            if (str[i] === ' ' || str[i] === ',') {
                i++;
                continue;
            }
  
            if (str[i] === ']') {
                i++;
                return arr; //Если есть закрывающая скобка, то возвращаем заполненный массив!
            }
  
            const value = parseValue(); 
            arr.push(value); 
  
            if (str[i] === ' ' || str[i] === ',') {
                i++;
            }
        }
        throw new Error('Строка не является корректным JSON массивом');
    }
  
    const parseString = () => {
        if (str[i] !== '"') {
            throw new Error('Строка не является корректной JSON строкой');
            //Сразу на входе проверяем, является ли строка пустой, если да, то выкидывает ошибку.
        }  


        i++;  
        let result = ''; //Создаем переменную состояния, в которую записываем строку.
        let escape = false;
        //Далее требуется проверить строку на наличие символов экранирования!

        while (i < str.length) {
            if (escape) { 
                if (str[i] === '"' || str[i] === '\\' || str[i] === '/') {
                    result += str[i];
                }else if (str[i] === 'b') { 
                    result += '\b';
                }else if (str[i] === 'f') { 
                    result += '\f';
                }else if (str[i] === 'n') { 
                    result += '\n';
                }else if (str[i] === 'r') { 
                    result += '\r';
                }else if (str[i] === 't') { 
                    result += '\t';
                }else { 
                    throw new Error('Ошибка экранирования!');
                }
                escape = false; 
            }else {
                if (str[i] === '"') { 
                    i++;
                    return result;
                }else if (str[i] === '\\') { 
                    escape = true;
                }else { 
                    result += str[i];
                }
            }
  
            i++;
        }
      
        throw new Error('Ошибка строки, проверьте строку на правильность!');
    }
  
    const parseNumber = () => {//Проверяем является ли строка корректным числом, если да, то меняем тип данных и возвращаем число!
        let number = '';
        
        while (i < str.length && isDigit(str[i])) {
            number += str[i];
            i++;
        }
        
        if (number === '') {
            throw new Error('Строка не является корректным JSON числом');
        }
        return Number(number);
    }
      
    const isDigit = (char) => {
        return /[0-9]/.test(char);
    }

    return parseObject();
}
  
const tryJSON = (string) => {
    try {
        const jsonObject = parse(string);
        console.log(jsonObject);
    }catch (error) {
        console.error(error);
    }
}

const string = '{"name":"Alex","sizes":[1,2,3,4], "cities":}';
const string2 = '{"name":"Thomas","birthDay":"1995-04-05T00:00:00.000Z"}';


tryJSON(string);
tryJSON(string2);