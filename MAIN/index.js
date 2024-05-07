const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "askeMeGH",
    message: "What is your GitHub username?",
    validade: (askeMeGH) => {
      if (askeMeGH) {
        return true;
      } else {
        console.log("Please provide your GitHub username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validade: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your email address");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects name?",
    validade: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log("Projects name is required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project?",
    validade: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Project Description is required");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["Apache 2.0", "MIT", "GPL v3.0", "None"],
    validade: (licenseInput = () => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select one of those options");
        return false;
      }
    }),
  },

  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    validade: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please Provide installation Steps");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    validade: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Provide an information");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "UserInstruction",
    message: "What does the user need to know about using the repo?",
    validade: (UserInstruction) => {
      if (UserInstruction) {
        return true;
      } else {
        console.log("Please provide some information to the user");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributions",
    message: "What does the user need to know about contributing to the repo?",
    validade: (contributionsInput) => {
      if (contributionsInput) {
        return true;
      } else {
        console.log("Please provide information about contributing");
        return false;
      }
    },
  },
];

//function to write README file
const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("../README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
      });
    });
  });
};

// function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answer) {
    console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent);
  });
}

// Function call to initialize app
init();

module.exports = questions;
