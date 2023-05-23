
function goldenMine(input){
    index = 0
    let locationsCount = Number(input[index])
    index++

    for(let l = 0; l < locationsCount; l++){

        let dobivNaDen = Number(input[index])
        index++

        let daysForLocation = Number(input[index])
        index++

        let dobiv = 0
        
        for(d = 0; d < daysForLocation; d++){
            let cuurentDobiv = Number(input[index])
            index++

            dobiv += cuurentDobiv
        }

        let avgDobiv = dobiv / locationsCount
        let difference = Math.abs(avgDobiv - )
        
    }




}
goldenMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])