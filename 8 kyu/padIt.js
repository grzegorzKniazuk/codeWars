function padIt(str,n){
    let result = '';
    if (n % 2 === 0) {
        let i = 0;
        while (i < n / 2) {
            result += '*';
            i++;
        }
        result += str;
        i = 0;
        while (i < n / 2) {
            result += '*';
            i++;
        }
    } else {
        let i = 0;
        while (i < n / 2) {
            result += '*';
            i++;
        }
        result += str;
        i = 0;
        while (i+1 < n / 2) {
            result += '*';
            i++;
        }
    }
    return result;
}