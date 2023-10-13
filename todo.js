const todo = [{
    text: 'go to the gym',
    complete: true
},
{
    text: 'wash Miley',
    complete: false
},
{
    text: 'iron t-shirts',
    complete: true
},
{
    text: 'cook ground beef',
    complete: true
},
{
    text: 'stretch',
    complete: false
}]

// 1. Convert array to array of objects --> text, completed
// 2. Create a function to remove the todo by text value

const deleteTodo = function (todo, todoText) {
   const index = todo.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
   })
    if (index > -1) {
        todo.splice(index, 1)
    }
}
const getThingsToDo = function (todo) {
return todo.filter(function (todo) {
    return !todo.complete                       // Filters out items where complete is false
        }
    )
}

const sortTodos = function (todo) {
    todo.sort(function (a, b) {
        if (a.complete < b.complete) {                  // if (!a.complete && b.complete) {}
            return -1
        } else if (b.complete < a.complete) {           // if (!b.complete && a.complete) {}
            return 1
        } else {                                        // ^ another condition setup option
            return 0
        }
    } )
} 

sortTodos(todo)
console.log(todo)