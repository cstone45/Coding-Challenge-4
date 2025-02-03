// Task 1: If Statements
var purchaseAmount = 3000
if (purchaseAmount >= 100) {
    discountPrice = 200
    finalAmount = purchaseAmount - discountPrice
}
console.log(`\`Final amount after discount: $${finalAmount}\``)

//Task 2: For Loop
let sales = [20, 32, 14, 5, 21]
for (let i = 92; i <= 92; i++)
console.log(`Total Sales`, i)

//Task 3: While Loop
var stock = 10
while (stock > 0) {
    console.log(`Your current stock is ${stock}`);
    stock--;
    }
    console.log(`Now your stock is ${stock}`)

//Task 4: Do...While Loop
var responses = 0
do {
    console.log(`Customer response ${responses}`);
    responses++
}
while (responses < 3);
console.log(`Customer responses reached ${responses} total.`)

//Task 5: For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}

//Task 6: For...Of Loop
let products = ["Hamburger", "Fries", "Milkshake"]
for (let product of products) {
    console.log(`Entree product:, ${product}`);
}

//Task 7: forEach() Method
let orders = [301, 302, 305]
orders.forEach((order, index) => {
    console.log(`Order${index + 1}: ${order}`);
});

//Task 8: Function Declaration
function calculateTax(amount) {
    return 6000 * 0.03;
}
console.log(`Tax on a purchase of $6000: $${calculateTax(6000)}`)

//Task 9: Function Expressions
function applyDiscount(amount) {
    return 4000 - (4000 * 0.20);
};
console.log(`Discounted price: $${applyDiscount(4000)}`)

//Task 10: Arrow Functions
const calculatePoints = (spent, points) => spent / points;
console.log(`Points recieved from spending $20: ${calculatePoints(20, 10)} points`)