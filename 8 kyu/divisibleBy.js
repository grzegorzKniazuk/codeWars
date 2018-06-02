function divisibleBy(numbers, divisor){
    return numbers.filter(value => {
        return value % divisor === 0;
    })
}