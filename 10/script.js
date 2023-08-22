const convertToJSON = (str) => {
    let currentIndex = 0;
    
    try {
      const jsonObject = parseObject();
      if (currentIndex !== str.length) {
        throw new Error('Строка не является валидным JSON');
      }
      return jsonObject;
    } catch (error) {
      console.error('Ошибка парсинга JSON:', error);
      return null;
    }
    
    function parseObject() {
      if (str[currentIndex] !== '{') {
        throw new Error('Строка не является валидным JSON объектом');
      }
      
      currentIndex++;
      const obj = {};
      
      while (currentIndex < str.length && str[currentIndex] !== '}') {
        const key = parseString();
        
        if (str[currentIndex] !== ':') {
          throw new Error('Строка не является валидным JSON объектом');
        }
        
        currentIndex++;
        const value = parseValue();
        obj[key] = value;
        
        if (str[currentIndex] === ',') {
          currentIndex++;
        }
      }
      
      if (str[currentIndex] !== '}') {
        throw new Error('Строка не является валидным JSON объектом');
      }
      
      currentIndex++;
      return obj;
    }
    
    function parseArray() {
      if (str[currentIndex] !== '[') {
        throw new Error('Строка не является валидным JSON массивом');
      }
      
      currentIndex++;
      const arr = [];
      
      while (currentIndex < str.length && str[currentIndex] !== ']') {
        const value = parseValue();
        arr.push(value);
        
        if (str[currentIndex] === ',') {
          currentIndex++;
        }
      }
      
      if (str[currentIndex] !== ']') {
        throw new Error('Строка не является валидным JSON массивом');
      }
      
      currentIndex++;
      return arr;
    }
    
    function parseString() {
      if (str[currentIndex] !== '"') {
        throw new Error('Строка не является валидной JSON строкой');
      }
      
      currentIndex++;
      let result = '';
      
      while (currentIndex < str.length && str[currentIndex] !== '"') {
        result += str[currentIndex];
        currentIndex++;
      }
      
      if (str[currentIndex] !== '"') {
        throw new Error('Строка не является валидной JSON строкой');
      }
      
      currentIndex++;
      return result;
    }
    
    function parseValue() {
      if (str[currentIndex] === '{') {
        return parseObject();
      } else if (str[currentIndex] === '[') {
        return parseArray();
      } else if (str[currentIndex] === '"') {
        return parseString();
      } else if (str[currentIndex] === 't' && str.substring(currentIndex, currentIndex + 4) === 'true') {
        currentIndex += 4;
        return true;
      } else if (str[currentIndex] === 'f' && str.substring(currentIndex, currentIndex + 5) === 'false') {
        currentIndex += 5;
        return false;
      } else if (str[currentIndex] === 'n' && str.substring(currentIndex, currentIndex + 4) === 'null') {
        currentIndex += 4;
        return null;
      } else {
        const number = parseNumber();
        return number;
      }
    }
    
    function parseNumber() {
      let number = '';
      
      while (currentIndex < str.length && isDigit(str[currentIndex])) {
        number += str[currentIndex];
        currentIndex++;
      }
      
      if (number === '') {
        throw new Error('Строка не является валидным JSON числом');
      }
      
      return parseFloat(number);
    }
    
    function isDigit(char) {
      return /[0-9]/.test(char);
    }
}

console.log(convertToJSON('{"name":"alex","sizes":[1,2,3,4]}'));
console.log(convertToJSON('{"name":"alex","sizes":[1,2,3,4}'));
console.log(convertToJSON('{"name":"alex","sizes":[1,2,3,4]'));
console.log(convertToJSON('{"name":"alex","sizes":[1,2,3,4],"type":true}'));