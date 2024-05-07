const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validade: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a project title");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project use?",
    choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
    validade: (licenseInput = () => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select one of the four options");
        return false;
      }
    }),
  },
  {
    type: "input",
    name: "description",
    message: "Provide a Project Description",
    validade: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please Provide a project description");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install your project?",
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
    name: "usage",
    message: "What is the use of your project?",
    validade: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please Provide a use for your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributions",
    message: "What guidelines must others follow in order to contribute?",
    validade: (contributionsInput) => {
      if (contributionsInput) {
        return true;
      } else {
        console.log("Please enter contribution guideline");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this project?",
    validade: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please explain how to test this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "askeMe",
    message: "What is your GitHub username?",
    validade: (askMeInput) => {
      if (askMeInput) {
        return true;
      } else {
        console.log("Please provide your GitHub username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "askeMe",
    message: "What is your GitHub username?",
    validade: (askMeInput) => {
      if (askMeInput) {
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
    message: "What is your email?",
    validade: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your Email");
        return false;
      }
    },
  },
];

//function to write README file
const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./generatedREADME.md", fileContent, (err) => {
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
