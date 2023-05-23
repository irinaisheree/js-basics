function moving(input){

    let index = 0

    let width = Number(input[index])
    index++

    let length = Number(input[index])
    index++

    let height = Number(input[index])
    index++

    let spaceVolume = width * length * height

    let command = input[index]
    index++

    while(command !== "Done"){
        let boxesVolume = Number(command)
        spaceVolume -= boxesVolume;

        if(spaceVolume <= 0){
            console.log(`No more free space! You need ${Math.abs(spaceVolume)} Cubic meters more.`)
        break;
        }

        command = input[index]
        index++
    }

    if(command = "Done"){

        console.log(`${spaceVolume} Cubic meters left.`)
    }

}

moving(["10",

"1",

"2",

"4",

"6",

"Done"])