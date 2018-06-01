function distinct(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) result.push(a[i]);
        else {
            a.splice(i, 1);
            i--;
        }
    }
    return result;
}