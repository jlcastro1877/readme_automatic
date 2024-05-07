// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    if (license === "MIT") {
      badge =
        "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)";
    } else if (license === "Apache 2.0") {
      badge =
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "GPL v3.0") {
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else {
      badge = "";
    }
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else if (license === "Apache 2.0") {
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "GPL v3.0") {
    licenseLink = "https://www.gnu.org/licenses";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license} `;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  ###  * [License](#askeMeGH)
  ###  * [GitHub username](#askeMeGH)
  ###  * [Email Address](#email)
  ###  * [Description](#description)
  ###  * [Installation](#Installation)
  ###  * [Tests](#tests)
  ###  * [About](#UserInstruction)
  ###  * [Contributors](#Ucontributions)

  ## GitHub username:
  ### ${data.askeMeGH}
  
  ## Email Address:
  ### ${data.email}

  ## Description:
  ### ${data.description}

  ## Installation:
  ### You must install the following for this app to function:
  ### ${data.installation}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${data.tests}

  ## About this REPO:
  ### ${data.UserInstruction}

  ## Contributors:
  ### ${data.contributions}

`;
}

module.exports = generateMarkdown;
