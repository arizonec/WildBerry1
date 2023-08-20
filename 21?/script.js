function getStackSize() {
    try {
      let count = 0;
      function recurse() {
        count++;
        recurse();
      }
      recurse();
    } catch (error) {
      return error.stack.split("\n").length;
    }
  }

  const browsers = [
    { name: "Chrome", userAgent: navigator.userAgent },
    { name: "Firefox", userAgent: navigator.userAgent },
    { name: "Opera", userAgent: navigator.userAgent },
    { name: "Safari", userAgent: navigator.userAgent }
  ];

    browsers.forEach((browser) => {
    const stackSize = getStackSize();
    const stackSizeInMB = (stackSize * 8 / 1024 / 1024) // 
  
    console.log(`Размер колл стека в ${browser.name}: ${stackSizeInMB.toFixed(20)} MB`);
  });

// function getStackSize() {
//     try {
//       let count = 0;
//       function recurse() {
//         count++;
//         recurse();
//       }
//       recurse();
//     } catch (error) {
//       return error.stack.split("\n").length;
//     }
//   }
  
//   // Пример использования функции
  

  
//   browsers.forEach((browser) => {
//     const stackSize = getStackSize();
//     const stackSizeInMB = (stackSize * 8) / (1024 * 1024); // Предполагаем, что каждый элемент стека занимает 4 байта
  
//     console.log(`Размер колл стека в ${browser.name}: ${stackSizeInMB.toFixed(20)} MB`);
//   });

// var i = 0;
// function recurse2 () {
//     i++;
//     recurse2();
// }
// try {
//     recurse2();
// } catch (ex) {
//     console.log('maxStackSize = ' + i + '\nerror: ' + ex);
// }

// 11030 * N = 6893 * (N + 8)
//(11030 - 6893) * N = 6893 * 8
//4137*N=55144
//13.32 * 11030 = 147024