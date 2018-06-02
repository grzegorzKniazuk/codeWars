function first(arr, n) {
    let output=[];
    if(n===undefined) n=1;
    if(n>5) n=5;
    for (let i=0;i<n;i++) output[i]=arr[i];
    return output;
}