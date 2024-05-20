import inquirer from "inquirer";
import chalk from "chalk";
let myBlance = 10000;
let myPin = 333;
console.log(chalk.bgCyan("\n\tWelcome to shehzeen ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellowBright("Enter your Login pin")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n\tYour pin is correct, Login successfully!\n"));
    let optionsAns = await inquirer.prompt([{
            name: "option",
            type: "list",
            message: ("select an option:"),
            choices: ["Withdraw Balance", "Check Balance"]
        }]);
    if (optionsAns.option === "Withdraw Balance") {
        let withdrawAns = await inquirer.prompt([{
                name: "withdrawMethod",
                type: "list",
                message: "Select withdrawal",
                choices: ["Fast Cash", "Enter amount:"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([{
                    name: "Cash",
                    type: "list",
                    message: "Select amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 30000]
                }
            ]);
            if (fastCashAns.Cash > myBlance) {
                console.log(chalk.red("insufficiently Balance"));
            }
            else {
                myBlance -= fastCashAns.Cash;
                console.log(`${fastCashAns.Cash} withdrawal successfully`);
                console.log(`your remaining Balance is: ${myBlance}`);
            }
        }
        else if (withdrawAns.withdrawal === "Enter the withdrawal amount") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter the amount withdrawl:",
                }]);
            if (amountAns.amount > myBlance) {
                console.log(chalk.red("insufficient balance"));
            }
            else {
                myBlance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`Your remaining balance is: ${myBlance}`);
            }
        }
    }
    else if (optionsAns.option === "Check Balance") {
        console.log(`Your Balance is: ${myBlance}`);
    }
}
else {
    console.log(chalk.red("your pin is incorrect, Try Again!"));
}
