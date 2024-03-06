// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return  `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Deployed Application URL
  
  ${data.link}

  ## Screenshot
  ![alt-text](${data.screenshot})

  ## Table of Contents

  * [Features](#features)
  * [Languages & Dependecies](#languagesanddependencies)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Sources](#sources)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Features

  ${data.features}

  ## Languages & Dependecies

  ${data.require}

  ## Usage

  ${data.usage}

  ## Installation

  ${data.installation}

  ## Sources 

  ${data.sources}

  ## Testing 

  ${data.test}

  ## Questions 

  Further questions send them [${data.email}](mailto:${data.email}?subject=[GitHub%20Dev20Connect])
`;
}

module.exports = generateMarkdown;
