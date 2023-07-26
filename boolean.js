// === is the equality operator 
// !== checks if two things aren't equal
// works with strings, too
// < less than operator, > greater than operator
// <= ltoet, >= gtoet


//temp
let temp = 80

if (temp <= 32) {
    console.log('It is freezing outside!')
}

if (temp >= 110) {
    console.log('It is roasting outside!')
}

if (temp >= 73) {
   console.log('It is pretty hot outside!')
}


//age

let age = 5

if (age <= 7) {
    console.log('Your child gets in FREE!')
}
if (age >= 65) {
    console.log('You get a senior discount!')
}


//speed
//first set a value, then the parameters of what you want the computer to do based on that value

let speed = 73

if (speed <= 70) {
  console.log('Thank you for not speeding!')
}

if (speed > 70) {
  console.log('Watch your speed!')
}

//temp 2
let temp_2 = 32

if (temp_2 <= 32) { 
  console.log("It's freezing out there!")
}
if (temp_2 > 32) {
  console.log("It's pretty chilly.")
}


//print out a message about senior and child discounts, for a website selling tickets 

let age_2 = 57

if (age_2 >= 60) {
  console.log("You get a senior discount!")
}
if (age_2 <= 7) {
  console.log("You get the child discount!")
}

//thought below was how to clean previous code, nope
//instead, this is how you'd verify the entered value coinciding with the message and range from above

//this will throw true or false in the termial:

//not exactly sure when this would be handy besides to verify 

let age_3 = 65

let isSenior = age_3 >= 60 

let isChild = age_3 <= 7

console.log(isSenior)
console.log(isChild)





