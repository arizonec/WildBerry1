const form = document.querySelector('.form');

const createInfo = (name, secondName, id) => {
    const infoPlace = document.querySelector('.info');
    const info = document.createElement('div');
    info.classList.add('info-style');

    info.innerHTML = `
        <p class="info-name">${name}</p>
        <p class="info-secondName">${secondName}</p>
        <p class="info-id">${id}</p>
    `

    infoPlace.append(info);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = [...form.querySelectorAll("input")].map((item) => item.value);

    if (inputs.every((item) => item !== '')) {
        const [name, secondName, id] = inputs;
        createInfo(name, secondName, id);
    }
});