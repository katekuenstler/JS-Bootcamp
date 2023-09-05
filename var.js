// This will throw Jen (var)
// if (10 == 10) {
    // var firstName = 'Jen'
// }
// console.log(firstName)

// This will throw an error (let)
// if (10 == 10) {
    // let firstName = 'Jen'
// }
// console.log(firstName)

// var is function scoped
// throws error
const setName = function () {
    var firstName = 'Jen'
}
setName()
console.log(setName)


if (10 == 10) {
    let name = 'kate'
}
name = 'jen'


if (5 == 5) {
    let name = 'chris'
    console.log(name)
}

