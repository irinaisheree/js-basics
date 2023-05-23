function catFood(input){

    let index = 0

    let catsCount = Number(input[index]);
    index++

    let currentFood = Number(input[index])
    index++

    let group1 = 0
    let group2 = 0
    let group3 = 0
    let allFood = 0

    for(let i = 1; i <= catsCount; i++){
        if(currentFood >= 100 && currentFood < 200){
            group1++
            allFood += currentFood
        } else if(currentFood >= 200 && currentFood < 300){
            group2++
            allFood += currentFood
        } else if(currentFood >= 300 && currentFood < 400){
            group3++
            allFood += currentFood
        }

        currentFood = Number(input[index])
        index++

        }

        let allFoodInKilos = allFood / 1000
        let fullFoodPrice = (allFoodInKilos * 12.45).toFixed(2)

        console.log(`Group 1: ${group1} cats.`)
        console.log(`Group 2: ${group2} cats.`)
        console.log(`Group 3: ${group3} cats.`)
        console.log(`Price for food per day: ${fullFoodPrice} lv.`)


    }





catFood (["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])