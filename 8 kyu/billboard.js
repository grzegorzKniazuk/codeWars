function billboard(name, price = 30){
    let cost = 0;
    for (let l of name) cost += price;
    return cost;
}