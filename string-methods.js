let name = '    Kate Kuenstler    '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abcdgfd123'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area
// isValidPassword

let isValidPassword = function (passcode) {
    return passcode.length > 8 && !passcode.includes('password')
}

// length more than 8 and doesn't contain the word password = true

console.log(isValidPassword('asdf'))
console.log(isValidPassword('asdfhjgffgjhk'))
console.log(isValidPassword('asdfpasswordkjdfng'))