function tennisRankList (input){

    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsWon = 0;
    let tournamentsWon = 0

    for(let i = 2; i < input.length; i++){
        let curResult = input[i];

        if(curResult === "W"){
            pointsWon += 2000
            tournamentsWon++
        } else if(curResult === "F"){
            pointsWon += 1200
        } else {
            pointsWon += 720
        }
    }

    let totalPoints = startingPoints + pointsWon
    console.log(`Final points: ${totalPoints}`)
    let avgPoints = Math.floor(pointsWon / tournamentsCount)
    console.log(`Average points: ${avgPoints}`)
    let wonPercent = (tournamentsWon / tournamentsCount) * 100
    console.log(`${wonPercent.toFixed(2)}%`)

 



}
tennisRankList(["5", "1400","F","SF","W","W","SF"])