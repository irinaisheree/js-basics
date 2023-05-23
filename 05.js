function everest(input){
    let index = 0
    let command = input[index]
    index++
    let goal = 8848
    let startMeters = 5364

    
    while(command !== "End"){
        let meters = Number(input[index])
        if(command === "Yes"){
        meters += startMeters
        }
        if(command === "No"){
        meters += startMeters

        }
        command++
        
        


        }
    }

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])