function calorie (member){
    const active = {
        'little activity' : 1.2,
        'moderately active' : 1.55,
        'very active' : 1.7,
        'extremely active' : 1.9,
    };
    return `${member[0]}´s daily calorie requirement is ${((10 * member[4] + 6.25 * member[3] - 5 * member[2] - (member[1] === 'f'? 161 : -5))*active[member[5]]).toFixed(2)} kcal.`;
}