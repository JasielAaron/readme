// TODO: Include packages needed for this application
//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require(" ./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the purpose of your project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select what licensed are going to be used in this project",
    choices: ["MIT", "APACHE2.8", "Boost1.0", "MPL2.0","BSD2","BSD3","none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependecies here.",
  },
  {
    type: "input",
    name: "usage",
    message: "State the languages or technologies used with this project",
  },
  {
    type: "input",
    name: "creator",
    message: "What is your GitHub username?",
  },
{
  type: "input",
  name: "name",
  message: "What is your full name?",
},
{
  type: "input",
  name: "email",
  message: "What is your email address?",

},
{
  type: "input",
  name: "sources",
  message: "Please provide a list of sources used to complete your project",
  default: "",
},
{
  type: "input",
  name: "test",
  message: "Please provide any test required if applicable.",

},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(). fileName). data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Generationg README.md File");
    writeToFile("./dist/README.md",generateMarkdown({...responses}));
  })
}

// Function call to initialize app
init();
