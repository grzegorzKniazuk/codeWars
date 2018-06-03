class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    static greetExtraTerrestrials(raceName) {
        return 'Welcome to Planet Earth '+raceName;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.info = name + 's age is ' + age;
    }
}