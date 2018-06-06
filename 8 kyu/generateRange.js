function generateRange(min, max, step){
    let result = [];

    while (min <= max) {
        result.push(min);
        min += step;
    }

    return result;
}