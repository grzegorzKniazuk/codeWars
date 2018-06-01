String.prototype.toAlternatingCase = function () {
    let result =  Array.from([...this]).map(value => {
        return (value === value.toUpperCase())?value.toLowerCase():value.toUpperCase();
    });
    return result.join('');
};