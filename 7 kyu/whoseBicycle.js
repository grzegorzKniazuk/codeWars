function whoseBicycle(diary1, diary2, diary3) {
    let son = ['first', 'second', 'third'],
        sum1 = Object.values(diary1).reduce((a,b) => a+b, 0),
        sum2 = Object.values(diary2).reduce((a,b) => a+b, 0),
        sum3 = Object.values(diary3).reduce((a,b) => a+b, 0);

    return `I need to buy a bicycle for my ${sum1 > sum2 && sum1 > sum3 ? son[0] : sum2 > sum3 && sum2 > sum1 ? son[1] : son[2]} son.`;

}