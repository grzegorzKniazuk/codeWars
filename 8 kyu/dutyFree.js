function dutyFree(normPrice, discount, hol){
    return parseInt(hol / ((discount === 0 ? normPrice : normPrice * discount) / 100));
}