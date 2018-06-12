function archersReady(archers){
    return archers.length === 0? false : archers.every(arrows => arrows >= 5);
}