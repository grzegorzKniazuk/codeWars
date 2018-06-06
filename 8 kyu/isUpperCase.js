String.prototype.isUpperCase = function() {
    return this.split('').every(value => {
        return value === value.toUpperCase();
    })
};