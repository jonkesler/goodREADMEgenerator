var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");


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
    type: "checkbox",
    message: "What steps are needed to install your Project?",
    name: "inst",
    choices: [
      "Clone the Repo", 
      "Install NPM packages", 
      "Run node", 
      "Answer questions about ReadMe",
      "Upload ReadMe.md to GitHub"
    ]
  },
  {
    type: "input",
    name: "usage",
    message: "Example of how can your Projectbe used?"
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
 
  ])
  .then(function(data) {

// // Start of GitHub Api
// // *******************************************
const queryUrl = `https://api.github.com/users/${data.user}`;

axios.get(queryUrl).then(function(res) {

    const gitName = res.data.name;
    const gitAvatar = res.data.avatar_url;
    const gitEmail = res.data.email;

    console.log(gitName);
    console.log(gitAvatar);
    console.log(gitEmail)

      
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
* [Contact](#contact)
    
    
## Installation
    
${data.inst}

      
## Usage 
    
${data.usage}


## License

This Project uses a ${data.license} License.


## Contributing
    
${ gitName }
${data.contrib}
    
    
## Tests

${data.test}
    

## Contact

If you would like to contribute to this project please contact ${ gitName } @ ${gitEmail}



Project Link: https://github.com/${data.user}/${data.repo}



`
 
    fs.writeFile(rMe, text, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      // console.log(data.license);
      // console.log(rMe)
  
    });
  })
})