// create a list of 5 todos
// print length; you have x todos
// print the first and second to last item strings (format with Todo: ...)

const todo = ['go to the gym', 'wash Miley', 'iron t-shirts', 'cook ground beef', 'stretch']
// console.log(`Todo: ${todo[0]}, ${todo[3]}`)

// delete 3rd item
// remove first item
// add new to end

// 1. The first item
// 2. The second item

// todo.splice(2, 1)
// todo.shift()
// todo.push('New item')
//console.log(todo)

console.log(`You have ${todo.length} items on your list.`)

todo.forEach(function (item, index){
    const num = index + 1
    console.log(`${num}. ${item}`)
})

