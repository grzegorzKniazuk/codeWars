function abbrevName(name){
    let nameAndSurname = name.split(' ');
    return nameAndSurname[0][0].toUpperCase()+'.'+nameAndSurname[1][0].toUpperCase();
}