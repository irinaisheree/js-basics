function oscars(input){

    let actorName = input[0]
    let pointsFromAcademy = Number(input[1])
    let judgesCount = Number(input[2])
    let totalPoints = pointsFromAcademy

    let judgeNameIndex = 3
    let judgePointsIndex = 4
    for(let i = 0; i  < judgesCount; i++){
        let currentJudgeName = input[judgeNameIndex]
        let currentJudgePoints = input[judgePointsIndex]

        totalPoints += (currentJudgeName.length * currentJudgePoints) / 2

        if(totalPoints > 1250.5){
            break;
           }
    
           judgeNameIndex += 2
           judgePointsIndex += 2
        }

        if (totalPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
        } else{
            let diff = 1250.5 - totalPoints
            console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more`)
        }


    }


oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])