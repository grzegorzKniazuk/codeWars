function countBy(x, n) {
    let z = [x];
    for (let i = 1, multipler = x; i < n; i++) {
        z.push(x += multipler);
    }
    return z;
}