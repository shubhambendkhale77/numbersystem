const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

let primeArray = [];

for (j = 0; j < numbers.length; j++) {
    let number = numbers[j];
    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    }
    else {
        for (i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
                isPrime = false
                break;
            }
        }
    }
    if (isPrime) {
        primeArray.push(number);
    }
}

let maxPrime = primeArray[0];
let minPrime = primeArray[0]
let sumPrime = 0;

for (j = 0; j < primeArray.length; j++) {
    let primeNum = primeArray[j];
    sumPrime += primeNum;


    if (primeNum > maxPrime) {
        maxPrime = primeNum
    }
    if (primeNum < minPrime) {
        minPrime = primeNum
    }
}

console.log("Prime Number", primeArray);
console.log("Max Prime Number", maxPrime);
console.log("Min Prime Number", minPrime);
console.log("Sum of prime numbers", sumPrime);

