localStorage.setItem('test', '123');
localStorage.setItem('test1', '1234');
localStorage.setItem('test2', '1235');
localStorage.setItem('test3', '12356');
localStorage.setItem('test4', '123567');
localStorage.setItem('test5', '123567');

const calculateLocalStorageSize = () => {
    let dataSize = 0;
  
    try {
      if ('localStorage' in window && window['localStorage'] !== null) {
        dataSize = JSON.stringify(localStorage).length;
        newData = 5242880 - dataSize;
      }
    } catch (error) {
      console.error('Ошибка localStorage:', error);
    }
  
    return newData;
  }
  

const localStorageSize = calculateLocalStorageSize();
console.log('Свободно:', localStorageSize, 'байт');