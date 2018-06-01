function dashatize(num) {
    if (isNaN(num)) return 'NaN';
    else {
        let digits = Math.abs(num).toString().split(''),
            result = '';
        for(let i = 0; i < digits.length; i++) {
            if (digits[i] % 2 === 0) result += digits[i];
            else {
                if (result[result.length-1] !== '-' && i !== 0) result += '-';
                result += digits[i];
                if (i+1 !== digits.length) result += '-';
            }
        }
        return result;
    }
}