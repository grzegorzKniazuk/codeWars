function twoSort(s) {
    let firstString = s.sort((prev, next) => {
            return (prev > next) - (prev < next);
        }
        ),
        result = [];

    for (letter of firstString[0]) {
        (letter !== firstString[0][firstString[0].length-1])?result.push(letter+'***'):result.push(letter);
    }
    return result.join('');
}