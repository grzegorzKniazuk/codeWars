function findOddNames(list) {
    let sum = 0, result = [];
    for (let i = 0; i < list.length; i++) {
        sum = 0;
        let letters = list[i]['firstName'];
        for (let j = 0; j < letters.length; j++) {
            sum += letters.charCodeAt(j);
        }
        if (sum % 2 !== 0) result.push(list[i]);
    }
    return result;
}