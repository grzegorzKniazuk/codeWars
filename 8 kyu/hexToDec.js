function hexToDec(hexString){
    let dec = 0, hex = hexString.split(''), isMinus = (hexString[0] === '-');

    if (isMinus) hex.shift();

    for (let i = 0; i < hex.length; i++) { // replace by numbers
        switch (hex[i]) {
            case 'F':
            case 'f':
                hex[i] = 15;
                break;
            case 'E':
            case 'e':
                hex[i] = 14;
                break;

            case 'D':
            case 'd':
                hex[i] = 13;
                break;
            case 'C':
            case 'c':
                hex[i] = 12;
                break;
            case 'B':
            case 'b':
                hex[i] = 11;
                break;
            case 'A':
            case 'a':
                hex[i] = 10;
        }
    }
    hex = hex.map(value => { // parse int for all numbers
        return parseInt(value);
    });

    for (let i = hex.length-1, pow = 0; i >= 0; i--, pow++) {
        dec += hex[i] * (Math.pow(16, pow));
    }
    return (isMinus)?parseInt('-'+dec):dec;
}

function hexToDec(hexString){
    return parseInt(hexString, 16);
}