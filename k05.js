function christmasGift(input){
    let index = 0

    let command = input[index]
    index++

    let kids = 0
    let adults = 0
    

    while(command !== "Christmas"){
        command = Number(command)
        if(command <= 16){
            kids++
        } else {
            adults++
        }

        command = input[index]
        index++
    } 
     

    
    let priceForToys = kids * 5
    let priceForSweaters = adults  * 15

console.log(`Number of adults: ${adults}`)
console.log(`Number of kids: ${kids}`)
console.log(`Money for toys: ${priceForToys}`)
console.log(`Money for sweaters: ${priceForSweaters}`)

}

christmasGift(["18", "20", "48", "45", "56", "37", "12", "14",  "Christmas"])