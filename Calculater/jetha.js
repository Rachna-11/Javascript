
let baseSalary = 50000; // Monthly salary
let bonus = 10000;      // Monthly bonus
let expenses = 30000;   // Monthly expenses
let taxRate = 0.2;      // Tax rate (20%)

// Step-by-step calculations

console.log("----------------------------")
// Adding base salary and bonus
console.log("Adding base salary and bonus");
let totalIncome = baseSalary + bonus 
console.log("Total salary = ", totalIncome)

console.log("----------------------------")

// Subtracting expenses from total income
console.log("Subtracting expenses from total income")
let income = totalIncome - expenses 
console.log("Income = ", income)

console.log("----------------------------")

// Calculating tax
console.log("Calculating tax")
let tax = income * taxRate 
console.log("Tax = ",tax)

console.log("----------------------------")

// Calculating final savings
console.log("Calculating final savings")
let saving = income - tax
console.log("Saving = ",saving)

console.log("----------------------------")

//  modulus 
console.log("Modulus")
let modulus = saving % 1000
console.log("Modulus = " , modulus)