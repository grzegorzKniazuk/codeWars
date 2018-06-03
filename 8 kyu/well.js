function well(x){
    let good = x.filter(value => {
        return value === 'good';
    });

    return good.length === 0 ? 'Fail!' : good.length > 2 ? 'I smell a series!' : 'Publish!';
}