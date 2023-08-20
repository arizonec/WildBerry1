const data = `{"name":"Kirill","city":"Moscow","parameters":["123","456",789],"age":23,"married":false}`;
console.log(JSON.parse(data));

const parse = (string) => {
    let store = '';
    let n = 0;
    let key = [];
    let value = [];

    for (let i = 0; i < string.length; i++) {
        if(string[i] === '{'){
            value[n] = '';
            value[n]+=store.trim();
            store = '';
            n++;
        } else if(string[i] === ':') {
            key[n] = '';
            key[n]+=store.trim();
            store='';
            n++;
        } else if(string[i] === ',' || string[i] === '}') {
        } else store += string[i];
    }

    return [key, value];
}

console.log(parse(data))


