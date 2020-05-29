var inquirer = require("inquirer");
var fs = require('fs');

// ****Provided code****
// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

inquirer.prompt([
  {
    type: "input",
    name: "user",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your full name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your GitHub email address?"
  },
  {
    type: "input",
    name: "repo",
    message: "What is your Project Repository?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your Project Title?"
  },
  {
    type: "input",
    name: "desc",
    message: "What is your Project Description?"
  },
  {
    type: "input",
    name: "inst",
    message: "What steps are needed to install your Project?"
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions on how to use your Project?"
  },
  {
    type: "list",
    message: "What type of License will you use with your Project?",
    name: "license",
    choices: [
      "GNU General Public License v3.0",
      "MIT License",
      "Existing projects and communities"
    ]
  },
  {
    type: "input",
    name: "contrib",
    message: "Who contributed to your Project?"
  },
  {
    type: "input",
    name: "test",
    message: "What tests have your run on your Project?"
  },


  
  ]).then(function(data) {
      
    var rMe = "readme.md";
    const text = `
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/fo-real.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)
    
    
![GitHub contributors](https://img.shields.io/github/contributors/${data.user}/${data.repo})
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${data.user}/${data.repo}?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/${data.user}/${data.repo})

# ${data.title}


## Description 
    
${data.desc}
    
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation
    
${data.inst}

1. Clone the repo

    git clone https://github.com/${data.user}/${data.repo}

2. Install MPM packages

    npm install

3. Run node

    node index

4. Answer questions about ReadMe.

5. upload ReadMe.md to GitHub
    
    
## Usage 
    
${data.usage}
Use this space to show useful examples of how a project can be used. Additional screenshots, 
code examples and demos work well in this space. You may also link to more resources.


## License

This Project uses a ${data.license} License.


## Contributing
    
${data.name}
${data.contrib}
    
    
## Tests

${data.test}
    

## Contact

${data.name} - ${data.email}

Project Link: https://github.com/${data.user}/${data.repo}



`
  
    fs.writeFile(rMe, text, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log(data.license);
      console.log(rMe);
  
  
    });
  });