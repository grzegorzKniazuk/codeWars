function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((prev, curr) => {
        return prev + curr;
    })/classPoints.length < yourPoints);
}