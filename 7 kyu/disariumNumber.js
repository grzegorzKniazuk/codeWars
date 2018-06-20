function disariumNumber(n){
    let numbers = n.toString().split(''), power = 0, i = 1;
    for (let number of numbers) power += Math.pow(parseInt(number), i++);
    return power === n ? 'Disarium !!' : 'Not !!';
}