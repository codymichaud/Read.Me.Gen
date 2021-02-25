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
            choices: ['MIT', 'BSD', 'Apache', 'GNU', 'Eclipse', 'Mozilla']
        },
    ]);


//const licenses = response.license === 'Apache' ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]" : response.license === 'GNU' ? "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]" : response.license === 'BSD' ? "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]" : response.license === 'MIT' ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]" : response.license === 'Eclipse' ? "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]" : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"

// TODO: Create a function to write README file


const writeToFile = (response) =>


    `# ${response.project}
    
Hi my name is ***${response.name}***.

### Table of Contents
#### Description

#### How to Install and Use

#### Questions

#### Licenses

I have been working on a project called ${response.project}.
### Description of Project
Heres a little description of my project: ${response.desc}.

### How to Install and use

In order to successfully use this ReadMe Generator the user will need to install the Inqurier package.
Go to your command line and type "****npm i inquirer****".
After successfully installing "****npm inqurier****" the user will then type "****node index.js****" to invoke the program. After invoking the program the user will then answer a series of prompts asking for their name, Github username, email, project name, project description and the licensing the user would like to use. The user will use the up and down arrow keys in order to move to the license they want to select after landing on their selected license they will then need to hit the space bar in order to select that license. After the users answers all the prompts a Readme will the be generated with the provided information.

### Licenses
This project has been license by ${response.license}

### Questions ?
If you have any questions feel free to either shoot me an email at ${response.email}. Or if you want to reach out to me on Github here is my username: ***${response.username}*** and the link to my Github [account](https://github.com/codymichaud)
`;


// TODO: Create a function to initialize app
const init = () => {
    questions().then((response) => {
        try {
            const markdown = writeToFile(response);
            fs.writeFileSync(`${response.project}.md`, markdown);
            console.log("Yay!! You wrote to the ReadMe!!!");
        } catch (err) {
            console.log(err);
        }
    })
};


// Function call to initialize app
init();
