const cannonsReady = (gunners) => {
    return (Object.values(gunners).indexOf('nay') === -1)?'Fire!':'Shiver me timbers!';
};