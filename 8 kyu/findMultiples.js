function findMultiples(integer, limit) {
    let result = [], multipler = integer;

    while (integer <= limit) {
        result.push(integer);
        integer += multipler;
    }

    return result;
}