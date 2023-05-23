function trekkingMania (input){
    let groupsCount = Number(input[0])
    let totalPeople = 0

    let musala = 0
    let monblan = 0
    let kilimandzharo = 0
    let k2 = 0
    let everest = 0

    for(let i = 1; i <= groupsCount; i++){
        let num = Number(input[i])
        totalPeople += num

        if(num <= 5){
            musala += num
        } else if(num <= 12){
            monblan += num
        } else if( num <= 25)  {
            kilimandzharo += num
        } else if(num <= 40){
            k2 += num
        } else{
            everest += num
        }
    }

    let musalaPercent = (musala / totalPeople) * 100
    let monblanPercent = (monblan / totalPeople) * 100
    let kilimandzharoPercent = (kilimandzharo / totalPeople) * 100
    let k2Percent = (k2 / totalPeople) * 100
    let everestPercent = (everest / totalPeople) * 100

    console.log(`${musalaPercent.toFixed(2)}%`)
    console.log(`${monblanPercent.toFixed(2)}%`)
    console.log(`${kilimandzharoPercent.toFixed(2)}%`)
    console.log(`${k2Percent.toFixed(2)}%`)
    console.log(`${everestPercent.toFixed(2)}%`)

    }



trekkingMania(["5","25","41","31","250","6"])