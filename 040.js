function exam(input){
    let index = 0
    let students = Number(input[index])
    index++
    
    let grade = Number(input[index])
    index++
    let group1 = 0
    let group2 = 0
    let group3 = 0
    let group4 = 0
    let finalGrade = 0
    
    for(let i = 1; i <= students; i++){
        if(grade >= 2 && grade <= 2.99){
            group1++
        }else if(grade >= 3 && grade <= 3.99){
            group2++
        }else if(grade >= 4 && grade <= 4.99){
                group3++
        } else{
            group4++
        }
        finalGrade += grade
        grade = Number(input[index])
        index++
        

    }
    let group1percent = (group1 / students) * 100
    let group2percent = (group2 / students) * 100
    let group3percent = (group3 / students) * 100
    let group4percent = (group4 / students) * 100
    
    let avGrade = finalGrade / students

    console.log(`Top students: ${group4percent.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${group3percent.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${group2percent.toFixed(2)}%`)
    console.log(`Fail: ${group1percent.toFixed(2)}%`)
    console.log(`Average: ${avGrade.toFixed(2)}`)

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