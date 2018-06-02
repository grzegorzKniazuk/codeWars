function superSize(num){
    num = num.toString().split('').map(a => {
        return parseInt(a);
    });
    num = num.sort((a,b) => {
        return a < b;
    });
    if (num[0] === 0) num.push(0);
    num = num.join('');
    return parseInt(num);
}