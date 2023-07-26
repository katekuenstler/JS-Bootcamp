
//Undefined for variables
let name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name.')
} else {
    console.log(name)
}

//Undefined for arguments

let square = function (num) {
    console.log(num)
}
let result = square()
console.log(result)

//use null instead of undefined
let age = 27

age = null

console.log(age)