
// Part 1: Determine the tip amount.

let billAmount = 500
let tip = (billAmount >= 50 && billAmount <= 300) ? billAmount*0.15 : billAmount*0.2 // Ternary Operator

// Part 2: Console Message

let total = billAmount+tip
console.log("The bill was $" + billAmount + ", the tip was $" + tip + ", and the total value $" + total + ".")

// Part 3: Create function

billAmount = 100
function CalcTip(billAmount) {
    return (billAmount >= 50 && billAmount <= 300) ? billAmount*0.15 : billAmount*0.2
}

// Part 4: Arrays

let DataSet1 = [275, 40, 430]
let DataSet2 = [125, 555, 44]
let bills = DataSet1.concat(DataSet2) // Combined both data sets to create Array of bills

let tips = []; // Defined tips as a variable
let totals = []; // Defined tips as a variable

for (let index = 0; index < bills.length; index++) {
    let tipValue = CalcTip(bills[index]); // Intermediary value to store tips as we calculate final arrays for tips and totals
    tips.push(tipValue); // Creates Array of tips
    totals.push(tipValue + bills[index]); // Creates Array of totals
}