


function outside() {
    let sum = 0;
    console.log('Внешнаяя функция отработала');
    return function inside() {
        console.log(`Внутренняя функция отработала с результатом - ${sum}`);
        return sum++;
    }
}

let fun = outside();
fun();
fun();
fun();
fun();