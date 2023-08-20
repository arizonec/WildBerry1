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

        console.log(`Сейчас ${temperature} градусов в ${name}!`);
    } catch(err) {
        console.log('Не смог получить данные с API, попробуйте изменить key!' ,err);
    }

}

fetchData();
