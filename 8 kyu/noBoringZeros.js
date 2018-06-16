function noBoringZeros(n) {
    if (n === 0) return 0;
    n = n.toString().split('');
    while (n[n.length-1] === '0') n.pop();
    return parseInt(n.join(''));
}