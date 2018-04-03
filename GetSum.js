function GetSum( a,b )
{
    let suma = 0;
    if (a < b) {
        while (a <= b) {
            suma += a;
            a++;
        }
    }
    else while (b <= a) {
        suma += b;
        b++;
    }
    return suma;
}