function isValid(formula){
    let mat1and2=true, mat3and4=true, mat5and6=true, mat7or8=false;
    for (let i=0,x=formula.length;i<x;i++) {
        if(formula[i]===1) {
            for (let j=0;j<x;j++) {
                if(formula[j]===2) mat1and2=false;
            }
        }
        if(formula[i]===3) {
            for (let j = 0; j < x; j++) {
                if (formula[j]===4) mat3and4=false;
            }
        }
        if(formula[i]===5) {
            mat5and6=false;
            for (let j=0;j<x;j++) {
                if(formula[j]===6) mat5and6=true;
            }
        }
        if(formula[i]===6) {
            mat5and6=false;
            for (let j=0;j<x;j++) {
                if(formula[j]===5) mat5and6=true;
            }
        }
        if(formula[i]===7 || formula[i]===8) mat7or8=true;
    }
    return mat1and2 && mat3and4 && mat5and6 && mat7or8;
}