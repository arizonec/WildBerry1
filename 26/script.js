function treeDOM(node, elemAction) {
  elemAction(node); 

  let children = node.children;

  for (let i = 0; i < children.length; i++) {
    treeDOM(children[i], elemAction); 
  }
}


const element = document.querySelector('.bucket');

function printNodeInfo(node) {
  console.log(node.className); 
}

treeDOM(element, printNodeInfo);

