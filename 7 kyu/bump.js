function bump(x){
    return x.split('').filter(w => w === 'n').length > 15 ? "Car Dead" : "Woohoo!";
}