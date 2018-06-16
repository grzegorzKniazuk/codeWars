function fiveLine(s){
    let result = '', tempString = s.trim();
    for (let i = 0; i < 5; i++) {
        result += `${tempString}`;
        if (i + 1 !== 5) result += '\n';
        tempString += s.trim();
    }
    return result;
}