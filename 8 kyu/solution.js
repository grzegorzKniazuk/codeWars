function solution(str){
    return str = str.split('').reverse().join('');
}

function solution(a, b){
    let short = a.length > b.length ? b : a,
        long = a.length < b.length ? b : a;

    return short.concat(long, short);
}