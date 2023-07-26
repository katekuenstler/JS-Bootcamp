let add = function (a, b) {
    return a + b
}
let result = add(10, 1)
console.log(result)

//Default values

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' / Score: ' + score
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge Area
//total, tipPercent = .2

let getTotal = function (total, tip = .2) {
    return 'Total: $' + total + ' / Tip: $' + (total * tip)
}
let bill = getTotal(100, .25)
console.log(bill)