// perform arithmetic operations - Jethalal ki salary ka hisab

console.log("Jethalal ki salary ka hisab \n")

let baseSalary = 70000;
let bonus = 10000;      
let expenses = 30000;  
let taxRate = 0.2;     

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
let modulus = saving % 3000
console.log("Modulus = " , modulus)

//------------------------------------------------------------

console.log("----------------------------")
console.log("----------------------------")

//Swap numebrs
console.log("Swap numebrs")

let num1 = 14
let num2 = 11

console.log("\nNum 1 = ", num1)
console.log("Num 2 = ", num2)

console.log("----------------------------")

num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2

console.log("Swap number : ")
console.log("\nNum 1 = ",num1)
console.log("Num 2 = ",num2)


//------------------------------------------------------------

console.log("----------------------------")

// grading system - Bhide Sir Ke Students Ka Result!

    console.log("Bhide Sir Ke Students Ka Result!\n")

    const marks = 96 

    let grade;
    if (marks >= 90) 
    {
        grade = "A1 - Topper of the Class";
    } else if (marks >= 75) 
    {
        grade = "A2 - Good Effort";
    } 
    else if (marks >= 50) 
    {
        grade = "B - Need Improvement";
    } 
    else 
    {
        grade = "Fail - Padho Beta Padho";
    }

    console.log("Grade : ",grade)

    document.body.innerHTML +=
    "<h2>Grading System </h2>" +
    "<p>Marks " + marks + "</p>"+
    "<p>grade " + grade + "</p><hr>"

//------------------------------------------------------------

console.log("----------------------------")

// grocery billing - Dayaben Ki Garba Shopping!

console.log("Dayaben Ki Garba Shopping!\n")

const Garba_Dress = 1500;
const Chaniya_Choli = 2000;
const Dandiya = 700;
const Garba_Jewelry = 2000;
const Gujarati_Handbag = 1000;

const totalcost = Garba_Dress + Chaniya_Choli + Dandiya + Garba_Jewelry + Gujarati_Handbag;

const gst = totalcost * 0.05;

const finaltotal = totalcost + gst;

console.log("Total Cost (without GST): ₹", totalcost);
console.log("GST (5%): ₹", gst);
console.log("Final Total (with GST): ₹", finaltotal);

    document.body.innerHTML +=
    "<h2>Garba Shopping</h2>" +
    "<h3>Garba Shopping Items: </h3>" +
    "<ul>" +
        "<li>graGarba_Dress : " +Garba_Dress + "</li>" +
        "<li>chaniChaniya_Choli : " +Chaniya_Choli + "</li>" +
        "<li>Dandiya : " + Dandiya + "</li>" +
        "<li>Garba_Jewelry : " + Garba_Jewelry + "</li>" +
        "<li>Gujarati_Handbag : " + Gujarati_Handbag + "</li>" +
    "</ul>" +
    "<h3>Final Bill: " + totalcost + "</h3> <hr>";
//------------------------------------------------

console.log("----------------------------")

// Interest Calculator - Popatlal Ka Shaadi Fund!

console.log("Popatlal Ka Shaadi Fund!\n")

const principal = 50000; 
const rate = 7;  
const time = 5;  

const interest = (principal * rate * time) / 100;

const totalPayable = principal + interest;

console.log("Interest: ", interest);
console.log("Total Amount: ", totalPayable);



document.body.innerHTML += 
    "<h2>Interest Calculator :</h2>" + 
    "<h4>Interest: " + interest + "</h4>" + 
    "<h4>Total payable amount: " + totalPayable + "</h4><hr>";

//------------------------------------------------

console.log("----------------------------")

// Salary Slip - Taarak Mehta Ki Bonus Calculation!

console.log("Taarak Mehta Ki Bonus Calculation!\n")

const basicSalary = 70000; 

const hra = basicSalary * 0.20;
const da = basicSalary * 0.10;
const grossSalary = basicSalary + hra + da;
const tax1 = grossSalary * 0.05;

const netSalary = grossSalary - tax1;

console.log("Basic Salary: ₹", basicSalary);
console.log("HRA (20%): ₹", hra);
console.log("DA (10%): ₹", da);
console.log("Gross Salary: ₹", grossSalary);
console.log("Tax (5%): ₹", tax1);
console.log("Net Salary: ₹", netSalary);

document.body.innerHTML +=
    "<h2>Salary Slip</h2>" + 
    "<p>Basic Salary: " + basicSalary + "</p>" + 
    "<p>HRA: " + hra + "</p>" + 
    "<p>DA: " + da + "</p>" + 
    "<p>TAX: " + tax1 + "</p>" + 
    "<p>Gross Salary: " + grossSalary + "</p>" + 
    "<p>Net Salary: " + netSalary + "</p>";

//----------------------------------------------------

console.log("----------------------------")

// Suspense Twist - Society Ki Khushi Ka Raaz!


console.log("Society Ki Khushi Ka Raaz :\n ");
if (finaltotal > 1000) 
{
    console.log("Dayaben ki Garba Shopping Successful!");    
}
if (totalPayable > 50000) 
{
    console.log("Shaadi fix kar lo, Popatlal!");    
}
if (netSalary > basicSalary) 
{
    console.log("Taarak Mehta ka Balance Perfect Hai!");    
}