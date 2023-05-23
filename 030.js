function catLife(input){

    let breed = input[0]
    let gender = input[1]

    let months = 0
    

    

    switch(breed){
        case "British Shorthair":
            if(gender === "m"){
                months = 13 * 12
            } else{
                months = 14 * 12
            }
            break;
        
            case "Siamese":
                if(gender === "m"){
                    months = 15 * 12
                } else{
                    months = 16 * 12
                }
                break;

            case "Persian":
                 if(gender === "m"){
                     months = 14 * 12
                 } else{
                    months = 15 * 12
                }
                break;

                case "Ragdoll":
                    if(gender === "m"){
                        months = 16 * 12
                    } else{
                       months = 17 * 12
                   }
                   break;    
              
                   case "American Shorthair":
                    if(gender === "m"){
                        months = 12 * 12
                    } else{
                       months = 13 * 12
                   }
                   break;     

                   case "Siberian":
                    if(gender === "m"){
                        months = 11 * 12
                    } else{
                       months = 12 * 12
                   }
                   break; 

                   default: 
                   console.log(`${breed} is invalid cat!`)
                   return;
    } 


    let catMonths = months / 6

    console.log(`${Math.floor(catMonths)} cat months`)



}

catLife (["Siamese",
"f"])