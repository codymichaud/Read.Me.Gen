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
    `# ${answers.project}
    ![NPM](https://img.shields.io/npm/l/inquirer)
Hi my name is ***${answers.name}***.
I have been working on a project called ${answers.project}.
### Table of Contents
Links to


### Description of Project
Heres a little description of my project: ${answers.desc}.
### Questions?
If you have any questions feel free to either shoot me an email at ${answers.email}. Or if you want to reach out to me on Github here is my username: ${answers.username} and the link to my Github [account](https://github.com/codymichaud)
`;


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

