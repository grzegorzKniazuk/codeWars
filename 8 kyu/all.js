function all( arr, fun ) {
    for (let i of arr) {
        check = fun(i);
        if (!check) return false;
    }
    return true;
}