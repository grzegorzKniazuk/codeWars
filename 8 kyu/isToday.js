function isToday(date) {
    let today = new Date();
    return today.getDay() === date.getDay() &&
        today.getMonth() === date.getMonth() &&
        today.getFullYear() === date.getFullYear();
}