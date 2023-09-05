//let num = 103.941
//console.log(num.toFixed(1))

let max = 5
let min = 1

let random = function (guess) {
    let result = Math.floor(Math.random() * (max - min)) + min
    
    if (result == guess) {
        console.log(result)
        return true 
    }
    else {
        return false
    }
}

console.log(random(4))
