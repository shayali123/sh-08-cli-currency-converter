import inquirer from "inquirer";
// let hum = {
//     name : "shayan",
//     age : 20,
//     qualification : "inter",
//     rollnmber: 396156,
//     address: "Karachi"
// }
// // console.log(hum.rollnmber)
// console.log(hum["address"])
const Currency = {
    USD: 1,
    PKR: 280,
    INR: 74.57,
    EUR: 0.91
};
let c1 = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["PKR", "USD", "EUR", "INR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Currency",
        choices: ["PKR", "USD", "EUR", "INR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
let fromcurrency = Currency[c1.from];
var tocurrency = Currency[c1.to];
var amount = c1.amount;
const baseAmount = amount / fromcurrency;
let converamount = baseAmount * tocurrency;
// console.log(fromcurrency)
// console.log(tocurrency)
// console.log(amount)
console.log(converamount);
