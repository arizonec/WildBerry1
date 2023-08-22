const root = document.querySelector('.root');
root.style.cssText = `
    display: flex;
    alight-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const createElement = () => {
    const newElem = document.createElement('div');
    newElem.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBnEfSB22oquOa32D_q1eHqxE2usiHWdFfNn6FaOY2_wOnIfiyZjV2WmQ4DTS0cKxkT4&usqp=CAU"></img>';
    newElem.style.cssText = `
        margin-left: 20%;
        transform: translateX(-50%);
        width: 227px;
        height: 222px;
        box-shadow: 1px 1px 40px pink;
    `;
    root.append(newElem);
}

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('button').style.display = 'none';
    createElement();
});