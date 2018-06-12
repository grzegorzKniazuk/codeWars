function countWins(winnerList, country) {
    return winnerList.filter(value => value.country === country).length;
}