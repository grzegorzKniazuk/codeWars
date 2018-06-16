function roundIt(n) {
    let arr = n.toString().split('.');
    return arr[0].length === arr[1].length ? Math.round(n) : arr[0].length > arr[1].length ? Math.floor(n) : Math.ceil(n);
}