// 1) you can't define the variable twice; doing this reassigns to the latest line defining the variable
//ex 1: legal, but only do it to deliberately reassign a variable
//the following returns 'Spot' in the terminal:
let petName = 'Miley'
petName = 'Spot'


console.log(petName)

// 2) you can't define a variable as a number 
//ex 1: illegal
//let 3 = 'Kate'

//console.log(3)

// 3) you can't define variables using reserved keywords

//ex 1: illegal
//let let = 12
//ex 2: illegal
//let console.log = 'kate'