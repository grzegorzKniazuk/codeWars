function seatsInTheater(nCols, nRows, col, row) {
    let sum = 0;

    for (let i = 0; i <= nCols-col; i++) {
        for (let j = 0; j < nRows - row; j++) sum++;
    }

    return sum;
}