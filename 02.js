function deerOfSanta(input){
    let daysGone = Number(input[0])
    let foodInKg = Number(input[1]);
    let foodForFirstDeer = Number(input[2]);
    let foodForSecondDeer = Number(input[3])
    let foodForThirdDeer = Number(input[4])

    let foodForDay = foodForFirstDeer + foodForSecondDeer + foodForThirdDeer
    let wholeFood = foodForDay * daysGone

    if(foodInKg >= wholeFood){
        let differene = foodInKg - wholeFood
        console.log(`${Math.floor(differene)} kilos of food left.`)
    } else {
        let difference1 = wholeFood - foodInKg
        console.log(`${Math.ceil(difference1)} more kilos of food are needed.`)
    }


}
deerOfSanta(["2",
"10",
"1",
"1",
"2"])