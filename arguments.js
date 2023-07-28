let add = function (a, b) {
    return a + b
}
let result = add(10, 1)
console.log(result)

//Default values

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} | Score: ${score}`
    //'Name: ' + name + ' / Score: ' + score
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge Area
//total, tipPercent = .2

let getTotal = function (total, tip = .2) {
    let tipPercent = tip * 100
    return `A ${tipPercent}% tip on $${total} would be $${total * tip}.` 
    //'Total: $' + total + ' / Tip: $' + (total * tip) - old version - not as easy to read
}
let bill = getTotal(100, .25)
console.log(bill)

// Challenge area
// A 25% tip on $40 would be $10.




