import inquirer from "inquirer";
let desireNumber = await inquirer.prompt([{
        message: "Enter your First Number", type: "number", name: "firstNumber"
    }, {
        message: "Enter your Second Number", type: "number", name: "secondNumber"
    },
    {
        message: "please select the desire operator",
        type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (desireNumber.operator === "Subtraction") {
    console.log(desireNumber.firstNumber - desireNumber.secondNumber);
}
else if (desireNumber.operator === "Multiplication") {
    console.log(desireNumber.firstNumber * desireNumber.secondNumber);
}
else if (desireNumber.operator === "Addition") {
    console.log(desireNumber.firstNumber + desireNumber.secondNumber);
}
else if (desireNumber.operator === "Division") {
    console.log(desireNumber.firstNumber / desireNumber.secondNumber);
}
else
    ("Please select the list operator");
