const getStackSize = () => {
    let count = 0;
    try {
      function recurse() {
        count++;
        recurse();
      }
      recurse();
     
    } catch (error) {
        console.log(count);
    }
  }

getStackSize();