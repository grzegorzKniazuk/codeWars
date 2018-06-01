function getAverage(marks){
    let sum = marks.reduce((a,b) => {
        return a+b;
    });
    return parseInt(sum / marks.length);
}