class Point {
    constructor(x , y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
}
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}