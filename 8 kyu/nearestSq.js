function nearestSq(n){
    let leftSide = 1, i = 1, rightSide = 1;
    while (i * i < n) {
        i++;
        rightSide = leftSide;
        leftSide = i*i;
    }
    return ((n - leftSide) > (rightSide - n))?leftSide:rightSide;
}