function sumArray(array) {

    if (!array) return 0;

    array.sort((a,b) => {
        return a - b;
    });
    array.pop();
    array.shift();

    if(array.length <= 1) return 0;

    return array.reduce((a,b) => {
        return a + b;
    })
}