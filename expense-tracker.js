const account = {
    name: 'Kate Kuenstler',
    expense: [],
    income: [],
    addExpense: function (description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpense = 0
        let totalIncome = 0
        let accountTotal = 0
        // dont HAVE to set accountTotal to 0, it still works.

        this.expense.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        accountTotal = totalIncome - totalExpense 

        return `${this.name} currently has $${accountTotal}. $${totalIncome} in income minus $${totalExpense} in expenses.`
        // `${this.name} currently has $${totalExpense} in expenses.`
    }
}

// add income array to account
// add income method - description, amount
// tweak getAccountSummary to show balance, income, and expenses

account.addExpense('Rent', 700)
account.addExpense('coffee', 4)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())