let MathX = (function() {

    const fibonacciNumber = (n) => {
        if (n <= 0) return 0;
        if (n === 1) return 0;
        if (n === 2) return 1;
    
        let a = 0, b = 1;
        for (let i = 2; i < n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }

    const fibonacci = (n) => {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const fibonacciSeq = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
        }
        return fibonacciSeq;
    }

    const prime = (n) => {
        if (n <= 1) return false;
        if (n <= 3) return true;

        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        }
        return true;
    }

    const nthPrime = (n) => {
        if (n <= 0) return 0;
        let count = 0;
        let num = 2;
        while (count < n) {
        if (prime(num)) {
            count++;
        }
        num++;
        }
        return num - 1;
    }

    const primeNumber = (n) => {
        const primes = [];
        for (let i = 2; i <= n; i++) {
        if (prime(i)) {
            primes.push(i);
        }
        }
        return primes;
    }

    return {
        fibonacciNumber: fibonacciNumber,
        fibonacci: fibonacci,
        nthPrime: nthPrime,
        primeNumber: primeNumber
    };

})();


console.log(MathX.fibonacciNumber(10)); 
console.log(MathX.fibonacci(10)); 
console.log(MathX.nthPrime(5)); 
console.log(MathX.primeNumber(11)); 








