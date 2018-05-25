class God {
    static create() {
        return [new Man('Adam'), new Woman('Eve')];
    }
}

class Human {
    constructor(woman, man) {
        this.man = man;
        this.woman = woman;
    }
}

class Man extends Human {
    constructor(man) {
        super(man);
    }
}

class Woman extends Human {
    constructor(woman) {
        super(woman);
    }
}