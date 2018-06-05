var repeatIt = function(str, n) {
    if (typeof str !== "string") return 'Not a string';
    if (n === 0) return '';
    for (let i = 0, text = str; i < n-1; i++) {
        str += text;
    }
    return str;
};