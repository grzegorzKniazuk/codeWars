function points(games) {
    return games.reduce((teamPoints, game) => {
        const [x, y] = game.split(':');

        if (x > y) {
            return teamPoints + 3;
        } else if (x === y) {
            return teamPoints + 1;
        } else {
            return teamPoints;
        }
    }, 0);
}

