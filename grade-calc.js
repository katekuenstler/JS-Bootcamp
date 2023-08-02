//Challenge area
//Student's score, total possible score
//You got a C (75%)! --> 15/20
//A = 90-100 B = 80-89 C = 70-79 D = 60-69 F = 0-59




let grade = function (student, total) {
    let percent = (student / total) * 100 

    if (percent >= 90 && percent <= 100) {
        return `You got an A (${percent}%)!`
    } else if (percent >= 80 && percent <= 89) {
        return `You got a B (${percent}%)!`
    } else if (percent >= 70 && percent <= 79) {
        return `You got a C (${percent}%)!`
    } else if (percent >= 60 && percent <= 69) {
        return `You got a D (${percent}%)!`
    } else {
        return `You got an F :-( (${percent}%)!`
    }

    }

    
let score = grade(15, 20)
console.log(score)