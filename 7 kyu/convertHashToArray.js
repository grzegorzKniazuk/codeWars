function convertHashToArray(hash){
    let result = [],
        keys = Object.keys(hash),
        values = Object.values(hash);

    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i], values[i]]);
    }

    return result.sort((a,b) => a[0] > b[0]);
}