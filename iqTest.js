function iqTest(numbers){
    let number = numbers.split(' ');
    let odd = number.filter(value => { if (value %2 === 0) return value; });
    let even = number.filter(value => { if (value %2 !== 0) return value; });
    return (odd.length === 1)?number.indexOf(odd[0])+1:number.indexOf(even[0])+1;
}