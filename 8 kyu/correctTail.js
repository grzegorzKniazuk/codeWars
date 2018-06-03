function correctTail(bod, tail) {

    var sub = bod.substr(bod.length-1);

    if (sub === tail) {
        return true;
    }
    else {
        return false;
    }
}