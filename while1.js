function oldLibrary(input){
let index = 0

let favouriteBook = input[index]
index++

let command = input[index]
index++

let booksChecked = 0

while(command !== "No More Books"){
    if(command === favouriteBook){
        console.log(`You checked ${booksChecked} books and found it.`)
        break;
    }
    booksChecked++;
    command = input[index]
    index++
}

if (command === 'No More Books') {
    console.log("The book you search is not here!")
    console.log(`You checked ${booksChecked} books.`)
}


}
oldLibrary(["Troy","Stronger","Life Style","Troy"])