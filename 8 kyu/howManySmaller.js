function howManySmaller(arr,n){
    arr = arr.map(value => value.toFixed(2));
    return arr.filter(value => value < n).length;
}