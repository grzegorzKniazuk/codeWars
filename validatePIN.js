function validatePIN (pin) {
    pin = Array.from(pin);
    if (pin.length !== 4 && pin.length !== 6) return false;
    for (let i =0; i < pin.length; i++) {
        if (parseInt(pin[i]) < 0 || isNaN(parseInt(pin[i]))) return false;
    }
    return true;
}