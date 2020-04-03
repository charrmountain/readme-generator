// TODO: import fs, path and inquirer modules
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

main();
// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
function main() {
  var userObj;

  prompUser().then(userAnswers => {
    userObj = userAnswers;
    api.getUser(userAnswers).then(data => {
        const markdown = generateMarkdown(userObj, data);
        return fs.writeFile("ReadMe.md", markdown, function(err) {
            if (err) throw err;
            console.log("ReadMe created");
        });
    });
});
}

function prompUser() {
    const userAnswers = inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "projectName",
            message: "What is your project name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please give a short description about your project."
        },
        {
            type: "list",
            name: "license",
            message: "What license does your project require?",
            choices: ["MIT", "APACHE 2.0", "GPL3.0", "BSD3"]
        },
        {
            type: "input",
            name: "install",
            message: "What command should be install for dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be install to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "usage",
            message: "What should the user know about your repo?"
        },
        {
            type: "input",
            name: "contribution",
            message: "What should the user know about contributing to the repo?"
        }
    ]);
    return userAnswers;
}
