function moon(input){

    let avgSpeed = Number(input[0])

    let fuelLeters = Number(input[1])

    let fullDistance = 2 * 384400 

    let timeNeeded = fullDistance / avgSpeed

    let fullTime = timeNeeded + 3

    let fuelNeeded = (fuelLeters * fullDistance) / 100

    console.log(Math.ceil(fullTime))
    console.log(fuelNeeded)

}
moon (["10000",
"5"])