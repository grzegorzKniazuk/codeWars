function nextPrime(n){
    let dividers = [];

    while (dividers.length !== 2) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) dividers.push(i);
        }
        console.log(dividers);

    }
}


console.log(maxTriSum([2,9,13,10,5,2,9,5]));
