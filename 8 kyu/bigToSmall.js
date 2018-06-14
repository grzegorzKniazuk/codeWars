function bigToSmall(arr){

    let result = '', arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(...arr[i]);
    }
    arrResult = arrResult.sort((a,b) => a < b? 1 : -1);

    for (let i = 0; i < arrResult.length; i++) {
        result += `${arrResult[i]}`;
        i !== arrResult.length-1 ? result += '>' : '';
    }
    return result;
}