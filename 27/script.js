let tank = document.querySelector('.fuel-tank');
let rocket = document.querySelector('.rocket');

tank.addEventListener('dragstart', (e) => {
    let selected = e.target;

    rocket.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    rocket.addEventListener('drop', (e) => {
        rocket.appendChild(selected);
        rocket.removeChild(selected);
        selected = null;
        rocket.classList.add('active');
    })
})