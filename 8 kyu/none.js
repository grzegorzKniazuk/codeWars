function none(arr, fun){
    return arr.every(value => !fun(value));
}