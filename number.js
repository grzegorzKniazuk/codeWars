var number = function(busStops){
    let peopleInBus = busStops[0][0] - busStops[0][1];
    for (let i = 1; i < busStops.length; i++) {
        peopleInBus += busStops[i][0] - busStops[i][1];
    }
    return peopleInBus;
};