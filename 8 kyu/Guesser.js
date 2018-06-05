class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives === 0) throw 'already dead';
        if (n !== this.number) this.lives--;
        else if (n === this.number) return true;
        if(this.lives === 0) return undefined;
    }
}