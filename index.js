#! /usr/bin/env node
import inquirer from "inquirer";
console.log("-".repeat(60));
console.log("            ---------- QUIZ ----------          ");
console.log("-".repeat(60));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: What are the three main 'simple types' in TypeScript?",
        choices: [
            "Array,Object,Boolean",
            "Array,Object,Symbol",
            "Object,String,Number",
            "Boolean,Number,String",
        ],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: TypeScript can always correctly infer a variables type?",
        choices: ["True", "False"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:______ is similar to 'any', but a safer alternative when uncertain about the type.?",
        choices: ["similar", "unknown", "never"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4: Which of the following filenames is the extension for typescript?",
        choices: [".tt", ".nod", ".ts", ".txt"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:Which of the following is not a valid TypeScript data type?",
        choices: ["number", "boolean", "string", "character"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "Boolean,Number,String":
        console.log("1.Correct!!");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case "True":
        console.log("2.Correct!!");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case "unknown":
        console.log("3.Correct!!");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case ".ts":
        console.log("4.Correct!!");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "character":
        console.log("5.Correct!!");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`Score: ${score}`);
