function fakeBin(x){
    return x.toString().split('').map(value => {
        return (value < 5)?0:1;
    }).join('');
}