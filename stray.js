function stray(numbers) {
    for (index in numbers) {
        if (numbers[0] !== numbers[index] && index !== 0) return numbers[index];
        if (numbers[0] !== numbers[index] && index === 1) return numbers[0];
    }
}