function processors(input){

    let processorsCount = Number(input[0]);

    let workers = Number(input[1]);

    let days = Number(input[2])

    let workingHours = workers * days * 8

    let processorsMade = Math.floor(workingHours / 3)

    if(processorsMade < processorsCount){
        let difference = processorsCount - processorsMade
        console.log(`Losses: -> ${(difference * 110.10).toFixed(2)} BGN`)
    } else{
        let difference2 = processorsMade - processorsCount
        console.log(`Profit: -> ${(difference2 * 110.10).toFixed(2)} BGN`)
    }


}

processors (["150",
"7",
"18"])