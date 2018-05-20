function reverseByCenter(s){
    let left = s.slice(0,s.length/2),
        right = (s.length%2===0)?
            s.slice(s.length/2, s.length):
            s.slice(s.length/2 + 1, s.length),
        center = s.split('').splice(s.length/2,1).join('');
    if (s.length % 2 === 0) {
        return right.concat(left);
    } else {
        return right.concat(center, left);
    }
}