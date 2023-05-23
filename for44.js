function cleverLily(input){

    let age = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let priceForToy = Number(input[2])

    let moneyWon = 0
    let evenBirthdaysMoneyWon = 10

    for(i = 1; i <= age; i++)
    if(i % 2 === 0){
        moneyWon += evenBirthdaysMoneyWon
        evenBirthdaysMoneyWon += 10
        moneyWon -= 1
    } else {
        moneyWon += priceForToy
    }

    if(moneyWon >= washingMachinePrice){
        let diff = moneyWon - washingMachinePrice
        console.log(`Yes!${diff.toFixed(2)}`)
    } else{
        let diff1 = washingMachinePrice - moneyWon
        console.log(`No! ${diff1.toFixed(2)}`)

    }




}

cleverLily(["10",

"170.00",

"6"])