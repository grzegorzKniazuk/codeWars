function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return [];
    let result = [], counter = 0, sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) counter++;
        else { sum += input[i] }
    }
    result.push(counter, sum);
    return result;
}