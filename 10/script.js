
function parse(str) {
    let i = 0;

    function parseObject() { 
        if(str[i] !== '{'){
            throw new Error('Строка не является корректным JSON объектом');

        }
        i++;
        const obj = {};
    
        while (i < str.length && str[i] !== '}') { 
            const key = parseString(); 

            if (str[i] !== ':') {
                throw new Error('Строка не является корректным JSON объектом');
            }
    
            i++;
    
            const value = parseValue();
            obj[key] = value; 
    
          
            if (str[i] === ',') {
                i++;
            }
        }
        
        if (str[i] !== '}') {
            throw new Error('Строка не является корректным JSON объектом');
        }
          
        i++;
        return obj;
      }
    
    function parseValue() {
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
  
    function parseArray() { 
        if (str[i] !== '[') {
            throw new Error('Строка не является корректным JSON массивом');
        }
        i++;
        const arr = [];
  
        while (i < str.length) { 
            if (str[i] === ' ' || str[i] === ',') {
                i++;
                continue;
            }
  
            if (str[i] === ']') {
                i++;
                return arr;
            }
  
            const value = parseValue(); 
            arr.push(value); 
  
            if (str[i] === ' ' || str[i] === ',') {
                i++;
            }
        }
        throw new Error('Строка не является корректным JSON массивом');
    }
  
    function parseString() {
        if (str[i] !== '"') {
            throw new Error('Строка не является корректной JSON строкой');
        }  


        i++;  
        let result = '';
        let escape = false;
     
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
  
    function parseNumber() {
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
      
    function isDigit(char) {
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