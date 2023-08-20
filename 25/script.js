const root = document.querySelector('.root');
root.style.cssText = `
    display: flex;
    alight-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

function createElement() {
    const newElem = document.createElement('div');
    newElem.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBnEfSB22oquOa32D_q1eHqxE2usiHWdFfNn6FaOY2_wOnIfiyZjV2WmQ4DTS0cKxkT4&usqp=CAU"></img>';
    newElem.style.cssText = `
        margin-left: 60%;
        transform: translateX(-50%);
        width: 500px;
        height: 100px;
    `;
    root.append(newElem);
}

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('button').style.display = 'none';
    createElement();
});