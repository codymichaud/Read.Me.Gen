// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generate } = require("rxjs");
// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Whats your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Write a brief description of your project.',
        },
    ]);

// TODO: Create a function to write README file
const writeToFile = (answers) =>
    `
Hi my name is ${answers.name}.
My Github username is ${answers.user}.
My email is ${answers.email}.
The project I have been working on is ${answers.project}.
Heres a little description of my project: ${answers.desc}.`;


// TODO: Create a function to initialize app
const init = () => {
    questions().then((answers) => {
        try {
            const markdown = writeToFile(answers);
            fs.writeFileSync('ReadMe.Gen.md', markdown);
            console.log("Yay!! You wrote to the ReadMe!!!");
        } catch (err) {
            console.log(err);
        }
    })
};

// Function call to initialize app
init();

