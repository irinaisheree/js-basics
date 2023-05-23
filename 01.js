function christmasPreparation(input){
    let paper = Number(input[0])
    let plat = Number(input[1]);
    let lepilo = Number(input[2])
    let percent = Number(input[3])


    let paperPrice = paper * 5.80
    let platPrice = plat * 7.20
    let lepiloPrice = lepilo * 1.2

    let fullAmount = paperPrice + platPrice + lepiloPrice
    let dicount = (percent / 100) * fullAmount
    let finalPrice = fullAmount - dicount

    console.log(finalPrice.toFixed(3))


}
christmasPreparation(["4",
"2",
"5",
"13"])