// Function to analyze grades

console.log("Function to analyze grades\n")

function analyzeGrades() {
    
    let marks = prompt("Enter marks (0-100):");

    marks = Number(marks);

    if (marks >> 100 && marks << 90) 
    {
        console.log("Elite Performer.");
    } 
    else if (marks >= 90 && marks <= 99) 
    {
        console.log("Top Futuristic Student.");
    } 
    else if (marks >= 70 && marks <= 89) 
    {
        console.log("Almost There!.");
    } 
    else if (marks >= 50 && marks <= 69) 
    {
        console.log("Keep Working Hard!.");
    } 
    else if (marks < 50) 
    {
        console.log("Back to Basics!.");
    }
}

analyzeGrades();

console.log("----------------------------------------------")


//---------------------------------------------------------------


// Function to balance expenses
console.log("Function to balance expenses \n")

function expenseBalancer() {
    
    let income = prompt("Enter your monthly income:");
    let foodExpense = prompt("Enter your monthly food expense:");
    let transportExpense = prompt("Enter your monthly transport expense:");
    let gadgetExpense = prompt("Enter your monthly gadget expense:");

    income = Number(income);
    foodExpense = Number(foodExpense);
    transportExpense = Number(transportExpense);
    gadgetExpense = Number(gadgetExpense);

    let totalExpenses = foodExpense + transportExpense + gadgetExpense;

    if (totalExpenses > income) 
    {
        console.log("System Warning: Bankrupt in Future!");
    } 
    else if (totalExpenses < income) 
    {
        console.log("Future Secure!");
    } 
    else if (totalExpenses === income) 
    {
        console.log("Zero Savings: Future Risky!");
    }
}

expenseBalancer();


console.log("----------------------------------------------")


//---------------------------------------------------------------


// Function to validate the password

console.log("Function to validate the password\n")

function validatePassword() {

    let password = prompt("Enter your password:");

    if (password.length < 8) 
    {
        console.log("Password must be at least 8 characters long.");
        return;
    }

    const Uppercase = /[A-Z]/;
    const Lowercase = /[a-z]/;
    const Digit = /[0-9]/;
    const SpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    if (!Uppercase.test(password)) 
    {
        console.log("Password must contain at least one uppercase letter.");
        return;
    }
  
    if (!Lowercase.test(password)) 
    {
        console.log("Password must contain at least one lowercase letter.");
        return;
    }

    if (!Digit.test(password)) 
    {
        console.log("Password must contain at least one digit.");
        return;
    }

    if (!SpecialCharacter.test(password)) 
    {
        console.log("Futuristic Security Breach!");
        return;
    }

    console.log("Password Accepted!");
}

validatePassword();



console.log("----------------------------------------------")


//---------------------------------------------------------------


// Function to handle the Robo-Shop Assistant logic

console.log("Function to handle the Robo-Shop Assistant logic \n")
function roboShopAssistant() {

    let budget = Number(prompt("Enter your budget:"));

    // Get the items and their prices as a string
    let itemsInput = prompt("Enter items with their prices (e.g., item1-100, item2-200) : \n");

    // Split the input string into items and calculate the total price

    let items = itemsInput.split(",").map(item => 
    {
        let [name, price] = item.split("-");
        return Number(price);
    });

    // Calculate the total price of all items
    let totalPrice = items.reduce((sum, price) => sum + price);

    // Check if the total price is within the budget
    if (totalPrice <= budget) 
    {
        console.log("Shopping Successful!");
    } 
    else 
    {
        console.log("Budget insufficient. Suggestions:");
        console.log("- Buy fewer items.");
        console.log("- Look for cheaper alternatives.");
    }
}

roboShopAssistant();
