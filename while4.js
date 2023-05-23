function walking(input){

    let index = 0

    let command = input[index]
    index++

    let stepsMade = 0
    while(command !== "Goin Home"){
        let stepsPerWalk = Number(command);
        stepsMade += stepsPerWalk

        if(stepsMade >= 10000){
            let diff = stepsMade - 10000
            console.log(`Goal reached! Good job!`)
            console.log(`${diff} steps over the goal!`)
            break;
        }

        command = input[index]
        index++
    }

    if(command === "Going Home"){
       let stepsPerWalk = Number(input[index])
        stepsMade += stepsPerWalk
        if(stepsMade >= 10000){
            let diff = stepsMade - 10000
            console.log(`Goal reached! Good job!`)
            console.log(`${diff} steps over the goal!`)
        } else{
            let diff1 = 10000 - stepsMade
           console.log(`${diff1} more steps to reach goal.`)
        }

    }

}

walking (["1000",

"1500",

"2000",

"6500"])