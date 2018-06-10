function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2,
        opponent = firstAttacker === fighter1.name ? fighter2 : fighter1;
    while (attacker.health > 0 && opponent.health > 0) {
        opponent.health -= attacker.damagePerAttack;
        if (opponent.health <= 0) return attacker.name;
        attacker.health -= opponent.damagePerAttack;
        if (attacker.health <= 0) return opponent.name;
    }
}