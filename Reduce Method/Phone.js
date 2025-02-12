let phone = [
    { name: "IPhone 16", price: "90,900" },
    { name: "IPhone 16 pro", price: "1,23,900" },
    { name: "IPhone 16 pro max", price: "1,44,900" },
    { name: "IPhone", price: "1,44,900" }
];

phone.forEach(e => console.log(e.price || "Price not found"));
console.log()
let totalPrice = phone.reduce((sum, e) => {
    let price = e.price ? Number(e.price.replace(/,/g, '')) : 0; 
    return sum + price;
}, 0);

console.log("Total Price:", totalPrice);
