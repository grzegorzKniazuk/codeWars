function deleteNth(arr,n){
    let k;
    for(let i = 0, x = arr.length; i < x; i++) {
        k = 0;
        for (let j = 0; j < x; j++) {
            if(arr[i] === arr[j] && i !== j && k < n) k++;
            if(arr[i] === arr[j] && i !== j && k >= n) {
                arr.splice(j,1);
                k++;
            }
        }
    }
    return arr;
}