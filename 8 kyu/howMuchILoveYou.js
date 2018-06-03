function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    while (nbPetals > 6) nbPetals -= 6;
    return arr[nbPetals-1];
}