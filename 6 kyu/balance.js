function balance(left,right){
    let leftWeight = left.split('').map((a) => { return (a === '!')?2:3; }),
        rightWeight = right.split('').map((a) => { return (a === '!')?2:3; }),
        leftSum = leftWeight.reduce((a,b) => { return a + b }),
        rightSum = rightWeight.reduce((a,b) => { return a + b });

    return (leftSum === rightSum)?"Balance":(leftSum>rightSum)?"Left":"Right";

}