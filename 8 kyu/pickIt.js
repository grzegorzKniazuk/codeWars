function pickIt(arr){
    var odd=[],even=[];

    arr.forEach(function (value) {
        value % 2 === 0 ? even.push(value) : odd.push(value);;
    });

    return [odd,even];
}