function arithmetic(a, b, operator){
    let op = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
    };
    return eval(`${a} ${op[operator]} ${b}`);
}