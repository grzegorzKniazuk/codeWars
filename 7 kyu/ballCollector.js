function ballCollector(detritus) {
    return {
        weight: detritus.filter(value => value === 58).reduce((a,b) => a + b, 0)
    };
}