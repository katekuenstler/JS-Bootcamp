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

document.querySelector('#create-note').addEventListener('click', function (e) {
   e.target.textContent = 'Clicked!'
})

document.querySelector('#remove-all').addEventListener('click', function () {
   document.querySelectorAll('.notes').forEach(function (note) {
    note.remove()
   })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
   console.log(e.target.value)
})