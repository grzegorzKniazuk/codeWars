function  calculateAge(born, year) {
    let age = (born + 1 === year || year + 1 === born) ? 'year' : "years";
    return year === born ? "You were born this very year!" :
        year > born ? `You are ${year - born} ${age} old.`: `You will be born in ${born - year} ${age}.`;
}