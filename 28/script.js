const cities = document.querySelector('ul');

const li = document.querySelector('#li');
const span = li.content.querySelector('span');

span.textContent = 'Sochi';

let copyLi = li.content.cloneNode(true);
cities.append(copyLi);

span.textContent = 'Surgut';

copyLi = li.content.cloneNode(true);
cities.append(copyLi);

span.textContent = 'Paris';

copyLi = li.content.cloneNode(true);
cities.append(copyLi);