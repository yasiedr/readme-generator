const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [  {    type: "input",    message: "What is your project title?",    name: "title",  }, 
 {    type: "input",    message: "Please enter a brief description of your project",    name: "description",  }, 
  {    type: "input",    message: "Please provide installation instructions",    name: "installation",  }, 
   {    type: "input",    message: "Please provide usage instructions",    name: "usage",  }, 
    {    type: "input",    message: "Please provide contribution guidelines",    name: "contributing",  }, 
    
    {    type: "input",    message: "Please provide test instructions",    name: "tests",  }, 
     {    type: "list",    message: "Please select a license",    name: "license",    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


function generateREADME(answers) {
    return `# ${answers.title}
  
    ## Description
    ${answers.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## Contributing
    ${answers.contributing}
  
    ## Tests
    ${answers.tests}
  
    ## License
    This project is licensed under the ${answers.license} license.
  
    ## Questions
    If you have any questions or issues, please contact me at [${answers.email}](mailto:${answers.email}). You can also visit my [GitHub profile](https://github.com/${answers.github}).
  
  `;
  }
  
 
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
  
      console.log("Success! Your README.md file has been generated.");
    });
  }
  

  function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateREADME(answers);
  
      writeToFile("README.md", readmeContent);
    });
  }
  
  // run the program
  init();