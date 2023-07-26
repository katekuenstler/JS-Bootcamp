// Functions: input, code, output

let greetUser = function () {
    console.log('Welcome, user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result 
}


let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


//Challenge Area
// FarenheightToCelciusCalculator

let temp = function (faren) {
    let result = (faren - 32) * 5 / 9
    return result
}

let value1 = temp(32)
let otherValue1 = temp(68)

console.log(value1)
console.log(otherValue1)


