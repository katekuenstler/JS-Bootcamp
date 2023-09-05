let myAccount = {
    name: 'Kate',
    expenses: 0,
    income: 0,
    total: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.income = 0 
    account.expenses = 0 
    account.total = 0 
}

let getAccountSummary = function (account) {
    account.total = account.income - account.expenses
    return `${account.name}'s account currently has $${account.total}. $${account.income} in income and $${account.expenses} in expenses.`
}

addExpense(myAccount, 30)
addExpense(myAccount, 20)
addIncome(myAccount, 200)
 
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)

console.log(getAccountSummary(myAccount))

addIncome(myAccount, 3000)
addExpense(myAccount, 57)
addExpense(myAccount, 65)
addIncome(myAccount, 34)

console.log(getAccountSummary(myAccount))


//was setting getAccountSummary(myAccount) equal to a variable and then printing it with log. only one addExpense was being called, it wasn't adding additional expenses
//doing it this way instead fixed everything: console.log(getAccountSummary(myAccount))
//call the function by name, inside the log, and include the object by name


//addExpense (myAccount, 2.50)
//challenge area
//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary


 
