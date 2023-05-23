function vacation(input){
let index = 0
let moneyForVacation = Number(input[index])
index++

let moneyAvalable = Number(input[index])
index++

let action = input(index)
index++

let amount = Number(input[index])

let daysSpeningCounter = 0
let daysCounter = 0

while(moneyAvalable > 0){
    if(action === "save"){
        moneyAvalable += amount
        daysCounter++
    } else{
        daysSpeningCounter++
        daysCounter++
        moneyAvalable -= amount

    }
}


    if(daysSpeningCounter >= 5){
        console.log(`You can't save the money.`)
        console.log(`${daysCounter}`)
    }

    if(moneyAvalable >= moneyForVacation){
        console.log(`You saved the money for ${daysCounter} days.`)
    }


}


vacation(["2000",

"1000",

"spend",

"1200",

"save",

"2000"])