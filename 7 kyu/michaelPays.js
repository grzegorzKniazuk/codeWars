function michaelPays(costs) {
    return costs < 5 ? costs % 1 === 0 ? costs : parseFloat(costs.toFixed(2)) : costs / 3 > 10 ? (costs - 10) % 1 === 0 ? costs - 10 : parseFloat((costs - 10).toFixed(2)) : costs - (costs / 3) % 1 === 0 ? costs - (costs / 3) : parseFloat((costs - (costs / 3)).toFixed(2));
}