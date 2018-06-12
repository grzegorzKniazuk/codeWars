class Cuboid {
    constructor(length, width, height) {
        this.length = length; // b
        this.width = width; // a
        this.height = height; // c
    }
    get surfaceArea() {
        return 2 * ((this.width * this.length) +
            (this.length * this.height) +
            (this.width * this.height));
    }
    get volume() {
        return this.length * this.width * this.height;
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}