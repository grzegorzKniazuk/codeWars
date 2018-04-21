function maxSum(arr,range){
    let sums = [], sum = 0, n = 0;

    while (n < range.length) {
        sum = 0;
        for (let i = range[n][0]; i <= range[n][1]; i++) {
            console.log(arr[i]);
            sum += arr[i];
        }
        sums.push(sum);
        console.log(sums);
        n++;
    }
    return Math.max(...sums);
}