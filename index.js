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
      type: "input",
      name: "license",
      message: "Would you like to add a license to your Project? Y/N"
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
    {
      type: "input",
      name: "pic",
      message: "Whould you like to include your GitHub profile picture Y/N?"
    },
    {
      type: "input",
      name: "email",
      message: "Whould you like to include your GitHub email Y/N?"
    },

  
  ]).then(function(data) {
      
    var rMe = "readme.md";
    const text = `
# ${data.title}


## Description 
    
${data.desc}
    
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Badges](#badges)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation
    
${data.inst}
    
    
## Usage 
    
${data.usage}


## License

if Y include general license else exclude


## Contributing
    
${data.contrib}
    
    
## Tests

${data.test}
    

## Questions

Please direct any and all questions to (email address)
Link Picture and name here to

## Badges
    
https://forthebadge.com/images/badges/built-with-love.svg
https://img.shields.io/github/languages/code-size/badges/shields.svg
https://img.shields.io/github/languages/top/badges/shields.svg
https://img.shields.io/badge/made%20by-${data.user}-blue.svg

`
  
    fs.writeFile(rMe, text, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
      console.log(rMe);
  
  
    });
  });