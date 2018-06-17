function describeAge(age) {
    return text=`You're a(n) `+(age>64?`elderly`:age>=18?`adult`:age>=13?`teenager`:`kid`);
}