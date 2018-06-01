function accum(s) {
    let output=[];
    for (let i=0,x=s.length;i<x;i++) {
        output.push(s[i].toUpperCase());
        for(let j=0;j<i;j++) {
            output.push(s[i].toLowerCase());
        }
        output.push('-');
    }
    output.pop();
    return output.join('');
}