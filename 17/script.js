const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const list = document.querySelector('.location-list');


const fetchData = async (query) => {
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = 'ef36520be00f919a5f2de006fbdec7fca73daf7c';
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${token}`,
          },
        body: JSON.stringify({query: query})
      }

      const response = await fetch(url, options);
      const data = await response.json();

      return data.suggestions;
}

const getQuery = async () => {
    const query = searchInput.value;

    const adresses = await fetchData(query);
    return adresses;
}

const createLi = (adresses) => {
    if(adresses.length === 0) {
        list.innerHTML = `<p>Результатов не нашлось :(</p>`
    } else {
        let state = ''; 
        adresses.forEach(li => {
           state +=  `<li><button class='button' type="submit">${li.value}</button></li>`
        });
    
        list.innerHTML = state;
    }
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    list.style.visibility = 'visible'; 

    createLi(await getQuery());
})

document.addEventListener('click', (e) => {
    let value = '';
    if(e.target.className === 'button') {
        value = e.target.textContent;
        list.style.visibility = 'hidden'; 
    }
})






const debounce = (func, ms) => {
    let timeout;

    return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), ms);
    }
}
// searchInput.addEventListener('keyup', debounce(async() => {createLi(await getQuery())}, 300));


const throttle = (func, ms) => {
    let isThrottled = false;
    let savedArgs; 

    return function wrapper(...args) {
        if(isThrottled) {
            savedArgs = arguments;
            return;
        }

        func(...args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if(savedArgs) {
                wrapper(savedArgs);
                savedArgs = null;
            }
        }, ms);

    }
}

searchInput.addEventListener('keyup', throttle(async() => {createLi(await getQuery())}, 300));