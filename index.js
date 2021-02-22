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
        {
            type: 'checkbox',
            name: 'license',
            message: 'What License would you like your project to have?',
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'Apache 2.0']
        },
    ]);

// TODO: Create a function to write README file
const writeToFile = (response) =>
    `# ${response.project}
    
Hi my name is ***${response.name}***.

### Table of Contents
[Description](/description/)

[How to Invoke and Use](/usage/)

[Questions](/questions/)

[Licenses](/licenses/)

I have been working on a project called ${response.project}.
### [Description of Project]
Heres a little description of my project: ${response.desc}.
### [Licenses]
This project has been license by ${response.license}
### Questions?
If you have any questions feel free to either shoot me an email at ${response.email}. Or if you want to reach out to me on Github here is my username: ${response.username} and the link to my Github [account](https://github.com/codymichaud)
`;


// TODO: Create a function to initialize app
const init = () => {
    questions().then((response) => {
        try {
            const markdown = writeToFile(response);
            fs.writeFileSync('ReadMe.Gen.md', markdown);
            console.log("Yay!! You wrote to the ReadMe!!!");
        } catch (err) {
            console.log(err);
        }
    })
};


// Function call to initialize app
init();

