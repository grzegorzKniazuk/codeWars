function isDivideBy(number, a, b) {
    return (Math.abs(number) % Math.abs(a) === 0 && Math.abs(number) % Math.abs(b) === 0);
}