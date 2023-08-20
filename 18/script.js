localStorage.setItem('test', '123');
localStorage.setItem('test1', '1234');
localStorage.setItem('test2', '1235');
localStorage.setItem('test3', '12356');
localStorage.setItem('test4', '123567');
localStorage.setItem('test5', '123567');

function calculateLocalStorageSize() {
    let dataSize = 0;
  
    try {
      // Проверяем, поддерживает ли браузер localStorage
      if ('localStorage' in window && window['localStorage'] !== null) {
        dataSize = JSON.stringify(localStorage).length;
        newData = 5242880 - dataSize;
      }
    } catch (error) {
      console.error('Ошибка при подсчете размера localStorage:', error);
    }
  
    return newData;
  }
  
  // Вызываем функцию для подсчета размера localStorage
  const localStorageSize = calculateLocalStorageSize();
  console.log('Максимальный объем данных, который можно записать в localStorage:', localStorageSize, 'байт');