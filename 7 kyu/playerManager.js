function playerManager(players) {
    if (players === null || players.length === 0) return [];
    let result = [], obj = {};
    players = players.split(',');

    for (let i = 0; i < players.length; i+=2) {
        obj.player = players[i].trim();
        obj.contact = parseInt(players[i+1]);
        result.push(obj);
        obj = {};
    }
    return result;
}