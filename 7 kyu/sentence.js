function sentence(List) {
    let sorted = List.sort((a, b) => +Object.keys(a) > +Object.keys(b), 0),
    resultString = Object.values(sorted[0]);

    for (let i = 1; i < sorted.length; i++) {
        resultString += ' ' + Object.values(sorted[i]);
    }

    return resultString;
}