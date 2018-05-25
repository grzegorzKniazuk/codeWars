function feast(beast, dish) {
    return (beast.split('').shift() === dish.split('').shift() && beast.split('').pop() === dish.split('').pop());
}