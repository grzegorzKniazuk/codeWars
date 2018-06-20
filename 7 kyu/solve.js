function solve(s){
    let upper = 0, lower = 0;
    for (let l of s) l === l.toUpperCase() ? upper++ : lower++;
    return upper > lower ? s.toUpperCase() : s.toLowerCase();
}