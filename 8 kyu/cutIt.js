function cutIt(arr){
    let shortest = arr[0];
    for (let item of arr) {
        if (item.length < shortest.length) shortest = item;
    }
    return arr.map(word => word.split('').slice(0,shortest.length).join(''));
}