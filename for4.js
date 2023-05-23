function cleverLily(input){
    let age = Number(input[0])
    let washingMachimePrice = Number(input[1])
    let pricePerToy = Number(input[2])

    let moneyWon = 0
    let evenBirthdaysMoneyWon = 10

    for(i = 1; i <= age; i++)
    if(i % 2 == 0){
        moneyWon += evenBirthdaysMoneyWon
        evenBirthdaysMoneyWon +=10 
        moneyWon -= 1
    } else{
        moneyWon += pricePerToy
    }



    if(moneyWon >= washingMachimePrice){
        let diff1 = moneyWon - washingMachimePrice

        console.log(`Yes! ${diff1.toFixed(2)}`)
    } else{
        let diff2 = washingMachimePrice - moneyWon

        console.log(`No! ${diff2.toFixed(2)}`)
    }
}

cleverLily(["10","170.00","6"])