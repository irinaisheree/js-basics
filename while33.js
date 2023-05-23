function vacation(input){
    let index = 0

    let moneyNeeded = Number(input[index])
    index++

    let moneyAvailable = Number(input[index])
    index++
   
    let daysSpending = 0

    let daysCounter = 0

while(moneyAvailable <= moneyNeeded && daysSpending <= 5){

    let action = input[index]
    index++
    let moneySpentOrSaved = Number(input[index])
    index++ 

   if(action === "save"){
    daysCounter++
    daysSpending = 0
    moneyAvailable += moneySpentOrSaved
  
    if(moneyAvailable >= moneyNeeded){
        console.log(`You saved the money for ${daysCounter} days.`);
        break;
   }
} else if(action === "spend"){
    daysCounter++
    daysSpending++

    moneyAvailable -= moneySpentOrSaved


    if(moneyAvailable <= 0){
        moneyAvailable = 0
    }

    if(daysSpending === 5){
        console.log(`You can't save the money.`);
        console.log(`${daysCounter}`);
        break;
    }
 }
}}




vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])