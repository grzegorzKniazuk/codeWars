function century(year) {
    if (year % 100 === 0) return year / 100;
    else {
        return parseInt((year / 100)+1);
    }
}