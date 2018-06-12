function aliasGen(Name, Surname){
    var firstName = {
        A: 'Alpha',
        B: 'Beta',
        C: 'Cache',
        D: 'Data',
        E: 'Energy',
        F: 'Function',
        G: 'Glitch',
        H: 'Half-life',
        I: 'Ice',
        J: 'Java',
        K: 'Keystroke',
        L: 'Logic',
        M: 'Malware',
        N: 'Nagware',
        O: 'OS',
        P: 'Phishing',
        R: 'RAD',
        S: 'Strike',
        T: 'Trojan',
        U: 'Ultraviolet',
        Y: 'Y',
        Q: 'Quantum',
        X: 'Xerox',
        V: 'Vanilla',
        W: 'WiFi',
        Z: 'Zero'

    };
    var surname = {
        A: 'Analogue',
        B: 'Bomb',
        C: 'Catalyst',
        D: 'Discharge',
        E: 'Electron',
        F: 'Faraday',
        G: 'Gig',
        H: 'Hacker',
        I: 'IP',
        J: 'Jabber',
        K: 'Killer',
        L: 'Lazer',
        N: 'n00b',
        M: 'Mike',
        O: 'Overclock',
        P: 'Payload',
        R: 'Roy',
        S: 'Spy',
        T: 'T-Rex',
        U: 'Unit',
        Q: 'Quark',
        W: 'Worm',
        Y: 'Yob',
        V: 'Virus',
        X: 'X',
        Z: 'Zombie'
    };
    var letters = 'ABCDEFGHIJKLMNOPRSTUQVWXYZ';

    if (!letters.includes(Name[0].toUpperCase()) || !letters.includes(Surname[0].toUpperCase())) return "Your name must start with a letter from A - Z.";
    return `${firstName[Name[0].toUpperCase()]} ${surname[Surname[0].toUpperCase()]}`;
}