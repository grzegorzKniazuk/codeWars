function whatNumberIsIt(n){
    if      (Number.isNaN(n)) return "Input number is Number.NaN";
    else if (Number.MAX_VALUE === n) return "Input number is Number.MAX_VALUE";
    else if (Number.MIN_VALUE === n) return "Input number is Number.MIN_VALUE";
    else if (Number.NEGATIVE_INFINITY === n) return "Input number is Number.NEGATIVE_INFINITY";
    else if (Number.POSITIVE_INFINITY === n) return "Input number is Number.POSITIVE_INFINITY";
    else { return `Input number is ${n}` }
}