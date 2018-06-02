function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(bird => {
        if (!geese.includes(bird)) return bird;
    });
};