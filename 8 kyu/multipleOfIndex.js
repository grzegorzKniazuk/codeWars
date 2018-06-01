function multipleOfIndex(array) {
    let result = [array[1]], multipler = 0;

    for (let i = 2; i < array.length; i++) {
        multipler = i;
        if (array[i] === 0) {
            result.push(array[i]);
            continue;
        }
        if (Math.abs(array[i]) === i) {
            result.push(array[i]);
            continue;
        }
        while (multipler <= Math.abs(array[i])) {
            multipler += i;
            if (multipler === Math.abs(array[i])) {
                result.push(array[i]);
                break;
            }
        }
    }
    return result;
}