// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You need to enter a project's title!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's description?",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You need to enter your project's description!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's installation instructions?",
        name: "installation",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("You need to enter your installation instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's usage information?",
        name: "usage",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("You need to enter your project's usage information!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's contribution guidelines?",
        name: "contributing",
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("You need to enter your project's contribution guidelines!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your project's test instructions?",
        name: "tests",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("You need to enter your project's test instructions!");
                return false;
            }
        }
    },
    {
        type: "list",
        message: "What is your project's license?",
        name: "license",
        choices: ['mit', 'ISC','IBM', 'no licese']
    },
    {
        type: "input",
        message: "What is your project's GitHub username?",
        name: "github",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("You need to enter your project's GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You need to enter your email!");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            
            writeToFile('./dist/README.MD', generateMarkdown(data))
        });
};

// Function call to initialize app
init();
