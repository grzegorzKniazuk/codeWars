function uniTotal(text) {

    let sum = 0;

    for (let index in text) {
        sum += text.charCodeAt(index);
    }

    return sum;
}