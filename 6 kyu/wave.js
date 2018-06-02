function wave(hello){
    let result = [];
    hello = hello.split('');
    for (let i in hello) {
        hello[i] = hello[i].toUpperCase();
        if (hello[i] !== ' ') result.push(hello.join(''));
        hello[i] = hello[i].toLowerCase();
    }
    return result;
}