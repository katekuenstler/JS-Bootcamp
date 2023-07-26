let temp = 56

//Logical And / Or Operator
// And: && 
//Or: ||

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 32 || temp >= 110) {
    console.log('Do not go out there...')
} else {
    console.log('Meh. Do what you want')
}

//Challenge
// And operator "&&" means both are true, false otherwise 
// Or operator "||"" means only one is true, false otehrwise
let isG1Vegan = true
let isG2Vegan = false 

if (isG1Vegan === true && isG2Vegan === true) {
    console.log('Here are our vegan options.')
} else if (isG1Vegan === true || isG2Vegan === true) {
    console.log('Here are our vegan options and our original menu.')
} else {
    console.log('Here is our original menu.')
}

