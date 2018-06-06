function greet(name){
    return "Hello, "+name+" how are you doing today?";
}

function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

function greet(language) {
    let database = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };


    if (language === 'IP_ADDRESS_INVALID' ||
        language === 'IP_ADDRESS_NOT_FOUND' ||
        language === 'IP_ADDRESS_REQUIRED') return 'Welcome';
    else {
        return database[language];
    }
}


function greet (name, owner) {
    return `Hello ${name === owner ? 'boss' : 'guest'}`;
}