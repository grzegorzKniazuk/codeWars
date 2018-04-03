function findOdd(A) {
    let counter=0;
    for (let i=0,x=A.length;i<x;i++) {
        counter=0;
        for(let j=0;j<x;j++) {
            if(A[i]===A[j]) counter++;
        }
        if(counter%2!==0) return A[i];
    }
}