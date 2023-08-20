class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const toLinkedList = (jsonStr) => {
    const data = JSON.parse(jsonStr);

    const first = new Node(data[0]);

    let current = first;

    for (let i = 1; i < data.length; i++) {
        const newNode = new Node(data[i]);
        current.next = newNode;
        current = newNode;
    }

    return first;
}

const linkedList = toLinkedList('[{"name": "Thomas"}, {"name": "Martin"}, {"name": "Steven"}]');
let current = linkedList;

while (current) {
    console.log(current.data);
    current = current.next;
}

console.log(linkedList)









