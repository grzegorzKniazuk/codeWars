var uniqueInOrder = function(iterable){
    let result = [];
    for (item of iterable) {
        if (result[result.length-1] !== item) result.push(item);
    }
    return result;
};