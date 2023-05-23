function santasHoliday(input){
   let days = Number(input[0])
   let nights = days - 1
   let roomType = input[1];
   let grade = input[2]

   switch(roomType){
    case "room for one person":
        price = nights * 18
        break;
    case "apartment":
        price = nights * 25
        if(nights < 10){
            price *= 0.7
        } else if(nights >= 10 && nights <= 15){
            price *= 0.65
        } else{
            price *= 0.5
        }
        break;
    case "president apartment":
        price = nights * 35
        if(nights < 10){
        price *= 0.9
        } else if(nights >= 10 && nights <= 15){
            price *= 0.85
        } else{
            price *= 0.8
        } break;
       
        }

        if(grade === "positive"){
            price = price + 0.25 * price
        } else{
            price *= 0.9
        }
        console.log(price.toFixed(2))


   }

santasHoliday(["30",
"president apartment",
"negative"])