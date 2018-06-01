function to_nato(words) {
    let output = '';
    for(let i of words) {
        switch (i) {
            case 'a':
            case 'A':
                output+='Alfa ';
                break;
            case 'b':
            case 'B':
                output+='Bravo ';
                break;
            case 'c':
            case 'C':
                output+='Charlie ';
                break;
            case 'd':
            case 'D':
                output+='Delta ';
                break;
            case 'e':
            case 'E':
                output+='Echo ';
                break;
            case 'f':
            case 'F':
                output+='Foxtrot ';
                break;
            case 'g':
            case 'G':
                output+='Golf ';
                break;
            case 'h':
            case 'H':
                output+='Hotel ';
                break;
            case 'i':
            case 'I':
                output+='India ';
                break;
            case 'j':
            case 'J':
                output+='Juliett ';
                break;
            case 'k':
            case 'K':
                output+='Kilo ';
                break;
            case 'l':
            case 'L':
                output+='Lima ';
                break;
            case 'm':
            case 'M':
                output+='Mike ';
                break;
            case 'n':
            case 'N':
                output+='November ';
                break;
            case 'o':
            case 'O':
                output+='Oscar ';
                break;
            case 'p':
            case 'P':
                output+='Papa ';
                break;
            case 'q':
            case 'Q':
                output+='Quebec ';
                break;
            case 'r':
            case 'R':
                output+='Romeo ';
                break;
            case 's':
            case 'S':
                output+='Sierra ';
                break;
            case 't':
            case 'T':
                output+='Tango ';
                break;
            case 'u':
            case 'U':
                output+='Uniform ';
                break;
            case 'v':
            case 'V':
                output+='Victor ';
                break;
            case 'w':
            case 'W':
                output+='Whiskey ';
                break;
            case 'x':
            case 'X':
                output+='Xray ';
                break;
            case 'y':
            case 'Y':
                output+='Yankee ';
                break;
            case 'z':
            case 'Z':
                output+='Zulu ';
                break;
            default:
                if(i !== ' ') output+=i+' ';
        }
    }
    return output.trim();
}