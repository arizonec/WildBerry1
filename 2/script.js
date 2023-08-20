
function strangeNumber(number) {
    let numArray = [];

    for(let i = 0; i < number; i++) {
        if( number % i === 0) {
            numArray.push(i);
        }
    }
    
    return numArray;
}

function findCombination(arr, targetSum) {
    if (targetSum < 70) return('Наименьшее странное число = 70! Введите number >= 70 ')

    const combinations = [];
  
    function superfluity(start, target, path) {
      if (target === 0) {
        combinations.push([...path]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        if (arr[i] > target) {
          continue;
        }
        path.push(arr[i]);
        superfluity(i + 1, target - arr[i], path);
        path.pop();
      }
    }
  
    superfluity(0, targetSum, []);


    for(let i = 0; i < combinations.length; i++) {
        let arraySums = combinations[i].reduce((sum, num) => sum + num);
        if (arraySums === targetSum) return false;
    }

    if (targetSum > arr.reduce((sum, num) => sum + num)) return false;

    return true;
  }

function strNum(number) {
    return findCombination(strangeNumber(number), number)
}

console.log(strNum(7912));