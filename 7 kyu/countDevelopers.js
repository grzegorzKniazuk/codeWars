function countDevelopers(list) {
    return list.filter(value => value.continent === 'Europe' && value.language === 'JavaScript').length;
}