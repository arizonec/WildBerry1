function treeDOM(node, elemAction) {
  elemAction(node); 

  var children = node.children;

  for (var i = 0; i < children.length; i++) {
    treeDOM(children[i], elemAction); 
  }
}


var element = document.querySelector('.bucket');

function printNodeInfo(node) {
  console.log(node.className); 
}

treeDOM(element, printNodeInfo);






// javascript
// function recursiveWrite(count) {
//   if (count > 0) {
//     document.write('Рекурсивный вызов document.write()<br>');
//     recursiveWrite(count - 1);
//   }
// }

// recursiveWrite(3);