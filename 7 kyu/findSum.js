function findSum(...args){
    if (args.length === 0) return 0;

    for (let arg of args) {
        if (arg < 0) return -1;
    }

    return args.reduce((a,b) => a + b, 0);
}