function mergeArrays(arr1, arr2) {
    let array =  (arr1.concat(arr2));
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) array.splice(i,1);
    }
    return array.sort((a,b) => {
        return a - b;
    });
}