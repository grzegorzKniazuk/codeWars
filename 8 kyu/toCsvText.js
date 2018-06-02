function toCsvText(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (j + 1 !== array[i].length) result += array[i][j]+',';
            else { result += array[i][j] }
        }
        if (i + 1 !== array.length) result += '\n';
    }
    return result;
}