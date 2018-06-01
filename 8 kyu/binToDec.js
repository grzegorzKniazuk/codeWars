function binToDec(bin) {
    let sum = 0, binary = bin.split('');
    for (let i = binary.length-1, pow = 0; i >= 0; i--, pow++) {
        sum += parseInt(binary[i]) * (Math.pow(2, pow));
    }
    return sum;
}