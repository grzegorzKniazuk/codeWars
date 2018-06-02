function excludingVatPrice(price){
    if (price === null) return -1;
    return parseFloat(((100 * price)/115).toFixed(2));
}