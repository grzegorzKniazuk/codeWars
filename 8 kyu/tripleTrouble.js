function tripleTrouble(one, two, three){
    one = one.split('');
    two = two.split('');
    three = three.split('');
    let result = [];

    while (one.length) {
        result.push(one.shift(), two.shift(), three.shift());
    }
    return result.join('');
}