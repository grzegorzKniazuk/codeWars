function isIsogram(str){
    for (let i=0,x=str.length; i<x; i++) {
        for (let j=0,x=str.length; j<x; j++) {
            if (str[i].toUpperCase() === str[j].toUpperCase() && i !== j) return false;
        }
    }
    return true;
}