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

// "you have 2 todos left" message in paragraph tag
// add a p for each to do above (use text value) - display on screen



const todos = todo.filter(function (todo) {
        return !todo.complete
})

const newP = document.createElement('h2')
newP.textContent = `You have ${todos.length} todos left...todo.`
document.querySelector('body').appendChild(newP)


todo.forEach(function (todo) {
       const newTodo = document.createElement('p')
       newTodo.textContent = `- ${todo.text}`
       document.querySelector('body').appendChild(newTodo)
    })

//Listen for new todo creation 
document.querySelector('#create-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})

 document.querySelector('#input-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
 })


