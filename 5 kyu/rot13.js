function rot13(message){
    let result = '';
    for (i in message) {
        switch (message[i]) {
            case 'a' : result += 'n'; break;
            case 'b' : result += 'o'; break;
            case 'c' : result += 'p'; break;
            case 'd' : result += 'q'; break;
            case 'e' : result += 'r'; break;
            case 'f' : result += 's'; break;
            case 'g' : result += 't'; break;
            case 'h' : result += 'u'; break;
            case 'i' : result += 'v'; break;
            case 'j' : result += 'w'; break;
            case 'k' : result += 'x'; break;
            case 'l' : result += 'y'; break;
            case 'm' : result += 'z'; break;
            case 'n' : result += 'a'; break;
            case 'o' : result += 'b'; break;
            case 'p' : result += 'c'; break;
            case 'q' : result += 'd'; break;
            case 'r' : result += 'e'; break;
            case 's' : result += 'f'; break;
            case 't' : result += 'g'; break;
            case 'u' : result += 'h'; break;
            case 'v' : result += 'i'; break;
            case 'w' : result += 'j'; break;
            case 'x' : result += 'k'; break;
            case 'y' : result += 'l'; break;
            case 'z' : result += 'm'; break;
            case 'A' : result += 'N'; break;
            case 'B' : result += 'O'; break;
            case 'C' : result += 'P'; break;
            case 'D' : result += 'Q'; break;
            case 'E' : result += 'R'; break;
            case 'F' : result += 'S'; break;
            case 'G' : result += 'T'; break;
            case 'H' : result += 'U'; break;
            case 'I' : result += 'V'; break;
            case 'J' : result += 'W'; break;
            case 'K' : result += 'X'; break;
            case 'L' : result += 'Y'; break;
            case 'M' : result += 'Z'; break;
            case 'N' : result += 'A'; break;
            case 'O' : result += 'B'; break;
            case 'P' : result += 'C'; break;
            case 'Q' : result += 'D'; break;
            case 'R' : result += 'E'; break;
            case 'S' : result += 'F'; break;
            case 'T' : result += 'G'; break;
            case 'U' : result += 'H'; break;
            case 'V' : result += 'I'; break;
            case 'W' : result += 'J'; break;
            case 'X' : result += 'K'; break;
            case 'Y' : result += 'L'; break;
            case 'Z' : result += 'M'; break;
            default: result +=message[i];
        }
    }
    return result;
}