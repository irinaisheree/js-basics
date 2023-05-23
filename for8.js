function tennisRankList(input){
    let tounamentsCount = Number(input[0])
    let points = Number(input[1])
    let pointsWon = 0
    let tournamentsWon = 0


    for(let i = 2; i < input.length; i++){
        let finishingPlace = input[i]

            if(finishingPlace === "W"){
                pointsWon += 2000
                tournamentsWon++
            } else if(finishingPlace === "F"){
                pointsWon += 1200
            } else {
                pointsWon += 720
            }
        }

            let finalPoints = points + pointsWon
            console.log(`Final points: ${finalPoints}`)

            let avgPoints = Math.floor(pointsWon / tounamentsCount)
            console.log(`Average points: ${avgPoints}`)

            let tournamentsWonPercent = (tournamentsWon / tounamentsCount) * 100
            console.log(`${tournamentsWonPercent.toFixed(2)}%`)
        }
    

tennisRankList(["5","1400","F","SF","W","W","SF"])