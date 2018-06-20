function automorphic(n){
    return (n * n).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!';
}