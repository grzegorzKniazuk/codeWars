function logicalCalc(array, op) {
    if (array.length === 1 && array[0] === true) return true;
    let toExe = '';

    for (let i = 0; i < array.length; i++) {
        toExe += array[i];
        if (i + 1 < array.length) toExe += ` ${op === 'OR' ? '||' : op === 'AND' ? '&&' : '^'} `;
    }
    return op === 'XOR' ? eval(toExe) === 1 : eval(toExe);
}