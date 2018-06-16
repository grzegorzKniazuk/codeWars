function bloodAlcoholContent(drinks, weight, sex, time){
    let ratio = sex === 'male' ? 0.73 : 0.66;
    return (drinks.ounces * 5.14 / (weight * ratio)) - .015 * time;
}

console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1));