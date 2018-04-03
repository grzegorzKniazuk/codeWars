function expandedForm(num) {
    let result = '',
        temp = [],
        i = 0;
    num = num.toString().split('');
    for (let index in num) {
        if (num[index] !== '0') {
            temp.push(num[index]);
            for (i = 0; i < num.length-1-index; i++) temp.push('0');
            result += temp.join('');
            result += ' + ';
            temp = [];
        }
    }
    return result.slice(0,result.length-3);
}