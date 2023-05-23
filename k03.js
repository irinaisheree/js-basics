function souvenirs(input){
    let country = input[0];
    let souvenirType = input[1];
    let souvenirCount = Number(input[2]);
    let finalPrice = 0

    switch(country){
        case "Argentina":
            if(souvenirType === "flags"){
                finalPrice = souvenirCount * 3.25
            } else if(souvenirType === "caps"){
                finalPrice = souvenirCount * 7.20
            } else if(souvenirType == "posters"){
                finalPrice = souvenirCount * 5.10
            } else if(souvenirType === "stickers"){
                finalPrice = souvenirCount * 1.25
            } else{
                console.log("Invalid stock!")
            } break;
          
        case "Brazil":
            if(souvenirType === "flags"){
                finalPrice = souvenirCount * 4.2
            } else if(souvenirType === "caps"){
                finalPrice = souvenirCount * 8.5
            } else if(souvenirType == "posters"){
                finalPrice = souvenirCount * 5.35
            } else if(souvenirType === "stickers"){
                finalPrice = souvenirCount * 1.2
            } else{
                console.log("Invalid stock!")
            } break;  

        case "Croatia":
            if(souvenirType === "flags"){
                finalPrice = souvenirCount * 2.75
            } else if(souvenirType === "caps"){
                finalPrice = souvenirCount * 6.9
            } else if(souvenirType == "posters"){
                finalPrice = souvenirCount * 4.95
            } else if(souvenirType === "stickers"){
                finalPrice = souvenirCount * 1.10
            } else{
                console.log("Invalid stock!")
            } break;  
            
        case "Denmark":
            if(souvenirType === "flags"){
                finalPrice = souvenirCount * 3.10
            } else if(souvenirType === "caps"){
                finalPrice = souvenirCount * 6.5
            } else if(souvenirType == "posters"){
                finalPrice = souvenirCount * 4.80
            } else if(souvenirType === "stickers"){
                finalPrice = souvenirCount * 0.9
            } else{
                console.log("Invalid stock!")
            } break;   

            
            default:
                console.log("Invalid country!")
                return;
        }     
        console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${finalPrice.toFixed(2)} lv.`)        

}
souvenirs(["Denmark", "caps", "8"])