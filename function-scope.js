// Global scope (temp, value1, value2)
    // Local scope (result, faren)
        // Local scope (isFreezing)

let temp = function (faren) {
    let result = (faren - 32) * 5 / 9
    
    if (result <= 0) {
        let isFreezing = true
    }
    
    return result
}

let value1 = temp(32)
let otherValue1 = temp(68)

console.log(value1)
console.log(otherValue1)