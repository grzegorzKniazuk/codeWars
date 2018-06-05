function whoseMove(lastPlayer, win) {
    if (lastPlayer === 'black' && !win) return 'white';
    if (lastPlayer === 'white' && win) return 'white';
    if (lastPlayer === 'white' && !win) return 'black';
    if (lastPlayer === 'black' && win) return 'black';
}