// === is the equality operator (for if statements only?)
// !== checks if two things aren't equal
//if statements say, "if this is true, then do this. if it's false, do that."

let isAccountLocked = false
let userRole = 'IT'


if(isAccountLocked) {
    console.log('Account is locked')
} else if(userRole === 'admin') {
    console.log('Welcome, Admin')
} else if(userRole === 'IT'){
    console.log('Welcome, tech boi')
}else {
    console.log('Welcome, user.')
} 

//challenge area: hot, freezing, and nice

let temp = 640

if(temp <= 32) {
    console.log('It is FREEZING out there, yall!')
} else if(temp >= 80) {
    console.log('It is WAY too hot out there, yall!')
} else {
    console.log('Go for it - its honestly pretty nice out there.')
}



//write an else if about humidity outside
//the boolean at the beginning is top dog. If it's true, the rest doesn't matter.
//dont forget to define the secondary comparison (user role, humidity, etc. whatever you're testing against - it needs to be defined before you can make a comparison)
//so in this case, if it's raining, its 100% humidity - no need to otherwise specify. 
//if the boolean is false, the program defaults to the rest of the parameters

let isRaining = false
let humidity = 56

if (isRaining) {
    console.log('100%')
} else if(humidity <= 30) {
    console.log("It's pretty dry, can't lie.")
} else if(humidity >= 70) {
    console.log("Get ready to sweat!")
}else {
    console.log("It's not so bad.")
}


//use the advanced operators to write a program that gives access to med staff vs patients

let LoginFail = false
let user = 'Med Staff'


if(LoginFail){
    console.log('Email or password incorrect.')
}else if(user === 'Med Staff'){
        console.log("Welcome, MedCare Team Member!")
}else if(user === 'patient'){
    console.log("Welcome to the patient portal!")
}else {
    console.log("User account does not exist.")
}
