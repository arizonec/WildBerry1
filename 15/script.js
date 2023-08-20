/*
Я использую API с сервиса погоды. 
Далее при помощи конструкции async await нужно указать, что функция будет содержать асинхронный код, путем добавления слова async . 
Далее, внутри функции нужно отметить словом await строки, в которых содержится асинхронный код.
*/
const link = 'http://api.weatherstack.com/current?access_key=e1303a3a4c365ccd19e972232cc52df8';

let store = {
    city: 'Moscow',
    temperature: 0,
} 

const fetchData = async () => {
    try {
      const result = await fetch(`${link}&query=${store.city}`);
      const data = await result.json();
      
        const {
            current: {
                temperature,
            },
            location: {
                name,
             }
        } = data;

        store = {
            city: name,
            temperature,
        };

        console.log(`It's ${temperature} degrees in ${name} now!`);
    } catch(err) {
        console.log('Не смог получить данные с API, попробуйте изменить key!' ,err);
    }

}

fetchData();
