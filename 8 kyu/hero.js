function hero(bullets, dragons){
    return bullets >= 2 * dragons;
}

function Hero (name) {
    this.name = name === undefined ? 'Hero' : name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}