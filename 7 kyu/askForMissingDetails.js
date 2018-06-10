function askForMissingDetails(list) {
    let keys = [], values = [], toAsk = [];
    for (let i = 0; i < list.length; i++ ){
        keys.push(Object.keys(list[i]));
        values.push(Object.keys(list[i]).map(index => list[i][index]));
    }

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
            if (values[i][j] === null) {
                let obj = {
                    firstName : values[i][0],
                    lastName : values[i][1],
                    country : values[i][2],
                    continent : values[i][3],
                    age : values[i][4],
                    language : values[i][5],
                    question: `Hi, could you please provide your ${keys[i][j]}.`
                };
                toAsk.push(obj);
            }
        }
    }

    return toAsk;
}