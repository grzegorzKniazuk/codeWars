function giveMeFive(obj){
    let table=[];
    for(let key in obj) {
        if (key.length===5) table.push(key);
        if (obj[key].length===5) table.push(obj[key]);

    }
    return table;
}