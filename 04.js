function exam(input){
   let studentsCount = Number(input[0])

    let group1 = 0
    let group2 = 0
    let group3 = 0
    let group4 = 0

    for(let i = 1; i <= studentsCount; i++){
        let grade = Number(input[i])

        if(grade >= 2 && grade <= 2.99){
            group1++
          
        } else if(grade >= 3 && grade <= 3.99){
            group2++
          
        } else if(grade >=4 && grade <= 4.99){
            group3++
    
        }else{
            group4++
        } 
        grade += grade
    } 
    
    
    let group4percent = (group4 / studentsCount) * 100
    let group3percent = (group3 / studentsCount) * 100
    let group2percent = (group2 / studentsCount) * 100
    let group1percent = (group1 / studentsCount) * 100
   

        console.log(`Top students: ${group4percent.toFixed(2)}%`)
        console.log(`Between 4.00 and 4.99: ${group3percent.toFixed(2)}%`)
        console.log(`Between 3.00 and 3.99: ${group2percent.toFixed(2)}%`)
        console.log(`Fail: ${group1percent.toFixed(2)}%`)
    

    }
    

exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])