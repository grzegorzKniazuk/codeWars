function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
}

function isDivisible(wallLength, pixelSize){
    return wallLength % pixelSize === 0;
}