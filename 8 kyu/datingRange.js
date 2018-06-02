function datingRange(age){
    return age > 14 ? `${parseInt(age / 2 + 7)}-${parseInt((age - 7) * 2)}` :
        `${parseInt(age - 0.10 * age)}-${parseInt(age + 0.10 * age)}`;
}