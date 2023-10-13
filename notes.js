const notes = [{
title: 'My next trip:',
body: 'I would like to go to Spain'
}, {
title: 'Habits to work on:',
body: 'Exercise, eating better.'
}, {
title:'Office modifications:',
body: 'Get a new seat.'
}]
// const findNote = function (notes, noteTitle) {
// }
// console.log(notes)
// console.log(notes.length)

// const noteFinder = notes.findIndex(function (noteTitle, index) {
//     const index = notes.findIndex(function (notes, index){
//     return note.title.toLowerCase() === noteTitle.title.toLowerCase()
// })})
// return notes[index]

//console.log('a' < 'b') //check if a comes before b alphabetically

const filteredNotes = function (notes, query) {
return notes.filter(function (notes, item) {
    const isTitleMatch = notes.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = notes.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
})}
// console.log(filteredNotes(notes, 'work'))

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    } )
} 

sortNotes(notes)
console.log(notes)

